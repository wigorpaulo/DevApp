import React, { useState } from 'react'
import Divider from '../reuse/Divider'
import Form from '../reuse/Form'
import Button from '../reuse/Button'

export default function Transaction(props) {

    const [valor, setValor] = useState(0.0)
    const [operation, setOperation] = useState('+');
    const [descricao, setDescricao] = useState('')

    const selectPlus = (e) => {
        setOperation('+')
    }

    const selectMinus = () => {
        setOperation('-')
    }

    const buttonPlus = {
        backgroundColor: (() => {return operation === '+' ? '#F5B402' : 'transparent' })(),
        border: (() => {return operation === '+' ? '0px' : '1px' })(),
        boxShadow: '0px 3px 6px rgb(0 0 0 / 40%)',
    }

    const buttonMinus = {
        backgroundColor: (() => {return operation === '-' ? '#F5B402' : 'transparent' })(),
        border: (() => {return operation === '-' ? '0px' : '1px' })(),
        boxShadow: '0px 3px 6px rgb(0 0 0 / 40%)',
    }

    const saveTransaction = () => {
        if(valor !== 0 && operation !== '' && !(operation === '-' && valor > props.money)) {
            props.transactionFunc(valor, operation, descricao)
        }
        
    }

    return (
        <div className='transactionContainer'>
            <Divider />


            <Form name="Valor"
                type="number"
                placeholder="Digite um valor..."
                func={setValor}
                min="0"
                step="0.01" />


            <label>Saldo Restante: {(props.money % 1 === 0 ? `${props.money},00` : props.money)}</label>

            <div style={{ display: 'flex', width: '88vw', padding: '0 6vw' }}>
                <button style={buttonPlus} className='btn' onClick={selectPlus}>+</button>
                <button style={buttonMinus} className='btn' onClick={selectMinus}>-</button>
            </div>

            <Form name="Descrição"
                type="text"
                placeholder="Digite uma descrição..."
                func={setDescricao} />

            <Button className='btn' onClick={saveTransaction}>Salvar </Button>

        </div>
    )
}