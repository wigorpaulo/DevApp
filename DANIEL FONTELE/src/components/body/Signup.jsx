import React, { Component, useState } from 'react';
import Button from '../reuse/Button';

export default function Signup(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const errorLabel = {
        visibility: props.showLoginError ? 'visible' : 'hidden',
        color: "#D69292",
    }

    return (
        <div className='container'>
            <p className='header'>Cadastre uma nova conta</p>
            <hr className='divider' />
            <div className='formContainer'>
                <label className='label'>Usuário</label>
                <div className='inputContainer'>
                    <input  className='input'
                            type="text"
                            placeholder='Digite seu usuário...'
                            onChange={e => setUsername(e.target.value)}
                            autoComplete="false" />
                    <span />
                </div>
            </div>
            <div className='formContainer'>
                <label className='label'>Senha</label>
                <div className='inputContainer'>
                    <input  className='input'
                            type="password"
                            placeholder='Digite seu usuário...'
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="false" />
                    <span />
                </div>
            </div>
            <p  className='errorLabel'
                style={errorLabel}>Usuário e/ou senha inválido(s)</p>
            <Button onClick={() => props.signup(username, password)}>Cadastrar</Button>
        </div>
    )
}