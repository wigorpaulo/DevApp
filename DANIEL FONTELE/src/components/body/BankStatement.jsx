import React from 'react'
import Divider from '../reuse/Divider'

export default function BankStatement(props) {
    return (
        <div className='container'>
            <br />
            <br />
            <br />
            
            <label>Saldo Restante: R${(props.money % 1 === 0 ? `${props.money},00` : props.money)}</label>

            <br />
            <br />
            <br />

            <Divider />

            <br />
            <br />

            <div style={{width: '94vw', paddingLeft: '6%', height: '60vh', overflowY: 'scroll'}}>
                {props.history.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.data}</p>
                            <p>{item.descricao}</p>
                            <p>{item.operacao} R${(item.valor % 1 === 0 ? `${item.valor},00` : item.valor)}</p>
                            <br />
                        </div>
                    )
                }, this)}
            </div>
        </div>
    )
}