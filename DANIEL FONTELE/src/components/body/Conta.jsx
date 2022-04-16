import React from 'react';
import Button from '../reuse/Button';

export default function Conta(props) {
    return (
        <div className='container'>
            <div className='row'>
                <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' alt='avatar' />
            </div>

            <p className='welcome'>Olá, {props.username} !</p>

            <hr className='divider' />

            <div className='btn-container'>
                <Button className='btn' onClick={props.transaction}>Movimentação</Button>
                <Button className='btn' onClick={props.bankstatement}>Extrato</Button>
                <Button className='btn' onClick={props.configurations}>Configurações</Button>
                <Button className='btn' onClick={props.logout}>Sair</Button>
            </div>
        </div>
    )
}