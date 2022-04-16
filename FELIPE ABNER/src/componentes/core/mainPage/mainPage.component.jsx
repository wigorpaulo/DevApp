import React, { Component } from 'react';
import './mainPage.style.css';
import {linksDictionary}from '../../../RoutesLinks';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default class MainPage extends Component{
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div className='row justify-content-center'>
                { this.props.isLoggedIn == false && (<Navigate to="/" replace={ true } />) }
                <div class="col-6 col-md-4 col-sm-4 col-xl-4">
                    <div className='row my-5'>
                        <h3 >Saldo: <span>R$ {this.props.balance}</span></h3>
                    </div>
                    <div className='row my-3 '>
                        <Link className='btn btn-primary' to={linksDictionary.paymentSend} >Enviar Pagamento</Link> 
                    </div>
                    <div className='row my-3'>
                        <Link className='btn btn-primary' to={linksDictionary.paymentReceive}>Receber Pagamento</Link>
                    </div>
                    <div className='row my-3'>
                        <Link className='btn btn-primary' to={linksDictionary.transactions}>Transações</Link>
                    </div>
                    <div className='row my-3'>
                        <a className='btn btn-danger' href='/'>Sair</a>
                    </div>
                </div>
            </div>
        );
    }
}
