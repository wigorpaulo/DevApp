import React, { Component } from 'react';
import {linksDictionary} from '../../Rotas';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

export default class Home extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div className=''>
                { this.props.isLoggedIn === false && (<Navigate to="/" replace={ true } />) }
                <div class="col-6 col-md-4 col-sm-4 col-xl-4">
                    <div className='row my-5'>
                        <h3 >Saldo: <span>R$ {this.props.balance}</span></h3>
                    </div>
                    <div className='row my-3 '>
                        <Link className='btn btn-primary' to={linksDictionary.Debito} >Enviar Pagamento</Link> 
                    </div>
                    <div className='row my-3'>
                        <Link className='btn btn-primary' to={linksDictionary.Credito}>Receber Pagamento</Link>
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
