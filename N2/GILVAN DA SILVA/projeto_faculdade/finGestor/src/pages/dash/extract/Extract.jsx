import React from "react";
import CardContainer from "../../../components/cardContainer/CardContainer";
import LayoutDashComponent from "../../../components/layoutDashComponent/LayoutDashComponent";
import Table from "../../../components/table/Table";
import ValuesApi from "../../../api/Transactions";

const Extract = () => {

    const [values, setValues] = React.useState([])

    const [type, setType] = React.useState('')
    const [startValue, setStartValue] = React.useState('')
    const [endValue, setEndValue] = React.useState('')

    React.useEffect(() => {
        ValuesApi.getAll(localStorage.getItem('id'))
            .then(resp => {
                setValues(resp.data.response.transactions)
            })
    }, [])

    React.useEffect(() => {
        let array = [];
        let id = localStorage.getItem('id')
        if (type) array.push(`type=${type}`)
        if (startValue) array.push(`value_gte=${startValue}`)
        if (endValue) array.push(`value_lte=${endValue}`)

        ValuesApi.filters(`?user_id=${id}&${array[0]}${array[1] ? '&' + array[1] : ''}${array[2] ? '&' + array[2] : ''}`)
            .then(resp => {
                // console.log(resp.data)
                setValues(resp.data)
            })
    }, [type, startValue, endValue]) // ?price={gte:10,lte:20}

    const search = (value) => {
        if (value) {
            ValuesApi.searchByDescription(localStorage.getItem('id'), value)
                .then(resp => {
                    setValues(resp.data.response.transactions)
                })
        } else {
            ValuesApi.getAll(localStorage.getItem('id'))
                .then(resp => {
                    setValues(resp.data.response.transactions)
                })
        }

    }

    return (
        <LayoutDashComponent>
            <CardContainer>
                <div className="row mb-2">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="d-flex">
                            <input onChange={e => { search(e.target.value) }} type="text" className="form-control" placeholder="Procurar por descrição..." />
                            <i className="bi bi-search d-flex align-items-center" style={{ fontSize: '20px', marginLeft: '-30px' }}></i>
                        </div>
                    </div>
                </div>

                <hr />

                {values.length === 0
                    ?
                    <h5 className="text-center">Não há valores cadastrados!</h5>
                    :
                    <Table
                        headers={
                            [
                                { value: 'Descricao' },
                                { value: 'Tipo', center: true },
                                { value: 'Valor', center: true },
                            ]
                        }
                    >
                        {
                            values.map((item, index) => (
                                <tr key={index}>
                                    <td className='align-middle p-3'>{item.description}</td>
                                    <td className='text-center align-middle'>
                                        <span className={item.type === "E" ? "badge bg-success shadow" : "badge bg-danger shadow"}>Entrada</span>
                                    </td>
                                    <td className='text-center align-middle' style={{ fontWeight: '500' }}>
                                        {parseFloat(item.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </td>
                                </tr>
                            ))
                        }
                    </Table>
                }
            </CardContainer>
        </LayoutDashComponent>
    )

}

export default Extract