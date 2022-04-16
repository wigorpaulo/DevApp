import React, { Component } from 'react';
import Button from '../reuse/Button'

export default function Login(props) {

    const errorLabel = {
        visibility: props.showLoginError ? 'visible' : 'hidden',
        color: "#D69292",
    }

    return (
        <div className='container'>
            <p className='header'>Faça login para continuar</p>
            <hr className='divider' />
            <div className='formContainer'>
                <label className='label'>Usuário</label>
                <div className='inputContainer'>
                    <input className='input'
                        type="text"
                        placeholder='Digite seu usuário...'
                        onChange={e => props.changeUsername(e.target.value)}
                        autoComplete="false" />
                    <span />
                </div>
            </div>
            <div className='formContainer'>
                <label className='label'>Senha</label>
                <div className='inputContainer'>
                    <input className='input'
                        type="password"
                        placeholder='Digite seu usuário...'
                        onChange={e => props.changePassword(e.target.value)}
                        autoComplete="false" />
                    <span />
                </div>
            </div>
            <p className='errorLabel'
                style={errorLabel}>Usuário e/ou senha inválido(s)</p>

            <Button onClick={props.logar}>Entrar</Button>

            <div className='containerCenter'>
                <button className='botaoNaoPossuoConta'
                    onClick={props.signup}>Não possuo uma conta.</button>
            </div>
        </div>
    )
}