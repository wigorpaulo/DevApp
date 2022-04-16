import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import Botao from '../BotaoVolta/Botao';


export default class Credito extends Component{
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
        const transaction = { amount: this.state.amount, date: new Date(), type: 'received' };
        this.props.addTransaction(transaction);
        this.setState({ sended: true });
    }
    render() {
        return (
            <div className='container'>
                { this.state.sended && (<Navigate to="/home" replace={ true } />) }
                { this.props.isLoggedIn === false && (<Navigate to="/Home" replace={ true } />) }

                <Botao/>

                <div className='row'>
                    <h4 >Saldo: <span>R$ { this.props.balance }</span></h4>
                </div>
                <div className='row mt-3'>
                    <h5>Valor a Receber</h5>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <input type="number" className="form-control" min='0' step="0.01"
                                value={ this.state.amount } onChange={ this.onChangeAmount } />
                        </div>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-primary " type="button" onClick={ this.onSumitPayment }>Depositar</button>
                    </div>
                </div>
            </div>
        )
    }
}

