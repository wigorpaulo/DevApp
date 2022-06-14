import React, { Component } from 'react';
import Registro from './registro';
import Botao from '../BotaoVolta/Botao';
import { Navigate } from 'react-router-dom';

class Movimentacao extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

    }
    render(){
        return (
          <div>
                { this.props.isLoggedIn === false && (<Navigate to="/" replace={ true } />) }
                <Botao/>
                <div>
                    <div className='transacao'>
                        <h3>Transações </h3>
                        <h6>Qtd transacoes: {this.props.transactions.length}</h6>
                    </div>
                    <div>
                        {this.props.transactions.map(({amount,type,date})=>{
                            return <Registro amount={amount} type={type} date={date} />;
                        })}
                    </div>
                </div>
          </div>
        )
    }
}
export default Movimentacao