import React from 'react'

import AreaGrid from '../../../components/areaGrid/AreaGrid'
import Table from '../../../components/table/Table'
import ValuesApi from '../../../api/Transactions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Alerts from '../../../helpers/alerts/Alerts'
import CardComponent from '../../../components/cardComponent/CardComponent'
import LayoutDashComponent from '../../../components/layoutDashComponent/LayoutDashComponent'
import CardContainer from '../../../components/cardContainer/CardContainer'
import FormAddValues from '../../../components/formAddValues/FormAddValues'
import LoadingComponent from '../../../components/loadingComponent/LoadingComponent'
import ReleaseApi from '../../../api/ReleaseApi'

const MySwal = withReactContent(Swal)

const Home = () => {

  const [idEdit, setIdEdit] = React.useState('')
  const [value, setValue] = React.useState('')
  const [type, setType] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [values, setValues] = React.useState([])

  let [totalEntry, setTotalEntry] = React.useState(0)
  let [totalOutput, setTotalOutput] = React.useState(0)
  let [netTotal, setNetTotal] = React.useState(0)
  let [edited, setEdited] = React.useState(false)
  let [load, setLoad] = React.useState(false)

  React.useEffect(() => {
    getAllTransactions()
  }, [])

  const getAllTransactions = () => {
    setLoad(true)
    ValuesApi.getAll(localStorage.getItem('id'))
      .then(resp => {

        let trans = resp.data.response.transactions;
        setValues(trans)

        totalEntry = 0
        totalOutput = 0
        for (let i = 0; i < trans.length; i++) {
          if (trans[i].type === 'E') {
            totalEntry += parseFloat(trans[i].value)
          } else {
            totalOutput += parseFloat(trans[i].value)
          }
        }
        setTotalEntry(totalEntry)
        setTotalOutput(totalOutput)
        setNetTotal(totalEntry - totalOutput)
        setLoad(false)
      })
  }

  function destroy(data) {
    MySwal.fire({
      title: 'Tem certeza?',
      text: `Deseja excluir "${data.description}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoad(true)
        ValuesApi.deleteItem(data.id)
          .then(resp => {
            if (resp.status === 200) {
              // =============================================
              createRelease(data.id, 3)
              // =============================================
              setValues(values.filter((values) => values.id !== data.id))

              if (data.type === "E") {
                setTotalEntry(totalEntry - parseFloat(data.value))
                setNetTotal(netTotal - parseFloat(data.value))

              } else {
                setTotalOutput(totalOutput - parseFloat(data.value))
                setNetTotal(netTotal + parseFloat(data.value))
              }

              Swal.fire(
                'Deletado!',
                'Item foi deletado com sucesso.',
                'success'
              )
            } else {
              Alerts.danger('Erro ao tentar deletar item!')
            }
            setLoad(false)
          }).catch(error => {
            Alerts.danger("Erro ao tentar deletar. Tente novamente!")
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })
      }
    })
  }

  const submit = (e) => {
    e.preventDefault()

    if (value && type && description) {
      setLoad(true)
      ValuesApi.register({
        user_id: localStorage.getItem('id'),
        description: description,
        type: type,
        value: value
      })
        .then((resp) => {

          let transaction = resp.data.response

          if (!resp.data.error) {
            // =============================================
            createRelease(transaction.transaction.id, 1)
            // =============================================
            setValues([...values, {
              id: transaction.transaction.id,
              description: description,
              type: type,
              value: value
            }])

            let TE = 0
            let TS = 0
            if (transaction.transaction.type === 'E') {
              setTotalEntry(totalEntry + parseFloat(transaction.transaction.value))
              TE = totalEntry + parseFloat(transaction.transaction.value)
            } else {
              setTotalOutput(totalOutput + parseFloat(transaction.transaction.value))
              TS = totalOutput + parseFloat(transaction.transaction.value)
            }

            if (TE === 0) TE = totalEntry
            if (TS === 0) TS = totalOutput

            setNetTotal(TE - TS)
            setValue('')
            setType('')
            setDescription('')
          } else {
            Alerts.danger(transaction.message)
          }
          setLoad(false)
        })
    } else {
      Alerts.danger("Verifique todos os valores informados!")
    }
  }

  const edit = (id) => {
    setIdEdit(id)
    setLoad(true)
    ValuesApi.getById(id)
      .then(resp => {
        let transaction = resp.data.response.transaction
        setEdited(true)
        setValue(transaction.value)
        setType(transaction.type)
        setDescription(transaction.description)
        setLoad(false)
      })
  }

  const submitEdit = (e) => {
    e.preventDefault()
    setLoad(true)
    ValuesApi.edit(idEdit, {
      user_id: localStorage.getItem('id'),
      description: description,
      type: type,
      value: value
    })
      .then(resp => {
        if (!resp.data.error) {
          // =============================================
          createRelease(idEdit, 2)
          // =============================================
          getAllTransactions()
          Alerts.success('Editado com sucesso!')
          setEdited(false)
          setValue('')
          setType('')
          setDescription('')
        }
        // setLoad(false)
      })
  }

  const createRelease = (transaction_id, operation_type) => {
    // =============================================
    ReleaseApi.create({
      user_id: localStorage.getItem('id'),
      transaction_id: transaction_id,
      operation_type: operation_type
    })
    // =============================================
  }

  return (
    <LayoutDashComponent>
      <div className='container p-0'>
        <div className="row">
          <div className="col-md-4">
            <CardComponent icon="bi-graph-up-arrow" title="Entradas" value={totalEntry} type="E" />
          </div>

          <div className="col-md-4">
            <CardComponent icon="bi-graph-down-arrow" title="Saídas" value={totalOutput} type="S" />
          </div>

          <div className="col-md-4">
            {
              (netTotal < 0)
                ?
                <CardComponent icon="bi-hand-thumbs-down" title="Líquido" value={netTotal} type="S" />
                :
                <CardComponent icon="bi-hand-thumbs-up" title="Líquido" value={netTotal} type="E" />
            }
          </div>
        </div>
      </div>

      <CardContainer>

        {load ? <LoadingComponent /> : ''}

        <AreaGrid
          left={
            <div>
              {
                edited
                  ?
                  <div className='d-flex justify-content-between bg-light p-2 rounded'>
                    <h5>Editar Item</h5>
                    <button
                      onClick={() => {
                        setEdited(false);
                        setValue('')
                        setType('')
                        setDescription('')
                      }}
                      className='btn btn-sm btn-success shadow'
                    >+ Voltar</button>
                  </div>
                  :
                  <h5>Adicionar</h5>
              }
              <FormAddValues
                setValue={e => setValue(e.target.value)}
                valueSetValue={value}

                setType={e => setType(e.target.value)}
                valueType={type}

                setDescription={e => setDescription(e.target.value)}
                valueDescription={description}
                textBtn={edited ? "Editar" : "Enviar"}
                submit={edited ? submitEdit : submit}
              />
            </div>
          }

          right={
            <div className='ps-3'>
              <h5 className='border-bottom pb-3'>Entradas/Saídas</h5>

              {
                values.length === 0 ?
                  <h5 className="text-center">Não há valores cadastrados!</h5>

                  :
                  <Table
                    headers={
                      [
                        { value: 'Descricao' },
                        { value: 'Tipo', center: true },
                        { value: 'Valor', center: true },
                        { value: '' }
                      ]
                    }
                  >
                    {
                      values.map((item, index) => (
                        <tr key={index} className={item.type === "E" ? "table-success" : "table-danger"}>

                          <td className='align-middle'>{item.description} </td>

                          <td className='text-center align-middle'>
                            <span className={item.type === "E" ? "badge bg-success shadow" : "badge bg-danger shadow"}>{item.type === 'E' ? 'ENTRADA' : 'SAÍDA'}</span>
                          </td>

                          <td className='text-center align-middle' style={{ fontWeight: '500' }}>
                            {parseFloat(item.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                          </td>

                          <td className='d-flex justify-content-center'>
                            <button onClick={() => { edit(item.id) }} className="btn btn-sm btn-primary m-1">
                              <i className="bi bi-pencil-fill"></i>
                            </button>
                            <button onClick={() => { destroy(item) }} className="btn btn-sm btn-danger m-1">
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          </td>

                        </tr>
                      ))
                    }
                  </Table>
              }

            </div>
          }
        />
        <br />
      </CardContainer>
    </LayoutDashComponent>
  )

}

export default Home