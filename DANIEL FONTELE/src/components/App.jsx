import React, { Component } from 'react';

import Header from './header/Header';

import If from './body/if'
import userData from '../data/logins';

import Login from './body/Login';
import Signup from './body/Signup';
import Conta from './body/Conta';
import Transaction from './body/Transaction';
import BankStatement from './body/BankStatement';
import Configuration from './body/Configuration';
import Home from './body/Home';

export default class App extends Component {

    state = {
        actualPage: 'Home',     //Default: 'Home'
        backPage: '',           //Default: ''
        showButton: false,      //Default: false
        username: '',           //Default: ''
        password: '',           //Default: ''
        showLoginError: false,  //Default: false
        money: 0.0,
        history: []
    }


    changePageName = (page) => {
        this.setState({ actualPage: page })
    }

    setBackPage = (page) => {
        this.setState({ backPage: page })
    }

    setShowBackButton = (show) => {
        this.setState({ showButton: show })
    }

    setShowLoginError = (show) => {
        this.setState({ showLoginError: show })

    }

    goBack = () => {
        this.setState({ actualPage: this.state.backPage })
        this.setState({ backPage: '' })
        this.setShowBackButton(false)
        this.setShowLoginError(false)
    }

    goRegister = () => {
        this.setShowBackButton(true)
        this.setShowLoginError(false)
        this.setBackPage('Login')
        this.setState({ actualPage: 'Signup' })
    }

    login = () => {
        if(this.validarLogin()) {
            this.changePageName('Conta')
            this.get()
        } else {
            this.setState({ showLoginError: true })
        }

    }

    get = () => {
        let dataUserLoggedIn = userData.find(data => {
            return data.username === this.state.username && data.password === this.state.password
        })
        this.setState({ money: dataUserLoggedIn.money })
        this.setState({ history: dataUserLoggedIn.history })
    }

    validarLogin = () => {
        // return this.state.username.trim() !== '' && this.state.password.trim() !== ''
        return userData.some(data => {
            return data.username === this.state.username && data.password === this.state.password
        })
    }

    changeUsername = (username) => {
        this.setState({ username: username })
    }

    changePassword = (password) => {
        this.setState({ password: password })
    }

    signup = (username, password) => {
        if (username !== '' && password !== '') {
            userData.push({ username: username, password: password, money: 1000, history: [{ valor: 1000, operacao: '+', descricao: 'Abertura de Conta', data: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}` }] })
            this.goBack()
            console.log(`Cadastrado:\n${username}\n${password}\nLista de Logins Atualizada:`)
            console.log(userData)
        } else {
            console.log('Preencha todos os campos!')
            this.setShowLoginError(true);
        }
    }

    logout = () => {
        this.setState({ actualPage: 'Login' })
        this.setState({ username: '' })
        this.setState({ password: '' })
        this.setShowBackButton(false)
        this.setShowLoginError(false)
    }

    transaction = () => {
        console.log(this.state.money)
        console.log(this.state.history)
        this.changePageName('Transaction')
        this.setShowBackButton(true)
        this.setBackPage('Conta')
    }

    transactionFunc = (valor, operacao, descricao) => {
        const valorToFloat = Math.floor(parseFloat(parseFloat(Math.floor(valor * 100) / 100).toFixed(2)) * 100) / 100
        this.addTransaction(valorToFloat, operacao, descricao)

        this.changePageName('Conta')
        this.setShowBackButton(false)
        this.setShowLoginError(false)
    }

    addTransaction = (valor, operacao, descricao) => {
        const dateString = new Date().toLocaleDateString()
        const hourString = new Date().toLocaleTimeString()
        const date = `${dateString} ${hourString}`
        userData.forEach(data => {
            if (data.username === this.state.username && data.password === this.state.password) {
                data.history.push({ valor: valor, operacao: operacao, descricao: descricao, data: date })
                if (operacao === '+') {
                    data.money = Math.floor((data.money + valor) * 100) / 100
                } else {
                    data.money = Math.floor((data.money - valor) * 100) / 100
                }
            }
        })
        this.get()
    }

    bankstatement = () => {
        this.changePageName('BankStatement')
        this.setShowBackButton(true)
        this.setBackPage('Conta')
    }

    configurations = () => {
        this.changePageName('Configuration')
        this.setShowBackButton(true)
        this.setBackPage('Conta')
    }

    render() {
        return (
            <div>
                <Header
                    actualPage={this.state.actualPage === 'Conta' ? '' : this.state.actualPage}
                    showButton={this.state.showButton}
                    goBack={this.goBack} />

                <div style={{ paddingTop: '11vh' }}>

                    <If if={this.state.actualPage === 'Home'}>
                        <Home width={window.width}
                            height={window.height}
                            onClick={() => this.changePageName('Login')} />
                    </If>

                    <If if={this.state.actualPage === 'Login'}>
                        <Login
                            logar={this.login}
                            signup={this.goRegister}
                            changeUsername={this.changeUsername}
                            changePassword={this.changePassword}
                            showLoginError={this.state.showLoginError} />
                    </If>

                    <If if={this.state.actualPage === 'Signup'}>
                        <Signup
                            signup={this.signup}
                            changeUsername={this.changeUsername}
                            changePassword={this.changePassword}
                            showLoginError={this.state.showLoginError} />
                    </If>

                    <If if={this.state.actualPage === 'Conta'}>
                        <Conta username={this.state.username}
                            logout={this.logout}
                            transaction={this.transaction}
                            bankstatement={this.bankstatement}
                            configurations={this.configurations} />
                    </If>

                    <If if={this.state.actualPage === 'Transaction'}>
                        <Transaction transactionFunc={this.transactionFunc}
                            money={this.state.money} />
                    </If>

                    <If if={this.state.actualPage === 'BankStatement'}>
                        <BankStatement money={this.state.money}
                            history={this.state.history} />
                    </If>

                    <If if={this.state.actualPage === 'Configuration'}>
                        <Configuration />
                    </If>
                </div>
            </div>
        );
    }
}
