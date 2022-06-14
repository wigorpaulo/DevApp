import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import Botao from '../BotaoVolta/Botao';


export default class Debito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            sended: false,
        }
    }
    onChangeAmount = (e) => {
        this.setState({ amount: e.target.value })
    }
    onSumitPayment = () => {
        const transaction = { amount: (parseFloat(this.state.amount) * -1), date: new Date(), type: 'sended' };
        this.props.addTransaction(transaction);
        this.setState({ sended: true });
    }
    render() {
        return (
            <div className='container'>
                { this.state.sended && (<Navigate to="/home" replace={ true } />) }
                { this.props.isLoggedIn === false && (<Navigate to="/" replace={ true } />) }
                <Botao/>


                <div className='row'>
                    <h3 >Saldo: <span>R$ { this.props.balance }</span></h3>
                </div>
                <div className='Pagamento'>
                    <h5>Enviar Pagamento</h5>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <input type="number" className="form-control" min='0' step="0.01"
                                value={ this.state.amount } onChange={ this.onChangeAmount } />
                        </div>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-primary " type="button" onClick={ this.onSumitPayment }>Sacar</button>
                    </div>
                </div>
            </div>
        )
    }
}

