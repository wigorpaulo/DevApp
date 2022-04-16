import "./App.css";
import {RoutesLinks} from "./RoutesLinks";
import React, { Component } from 'react';


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        password: null,
        isLoggedIn: false,
        balance: (0).toFixed(2),
        transactions: [],
    }     
  }
  registrar = (username, password) =>{
      this.setState({username: username,password: password});
  }
  logar = (username, password) =>{
    if(username === this.state.username) {
      if(password === this.state.password){
        this.setState({isLoggedIn: true});
      }else{
        throw new Error("Senha incorreta");
      }
    }else{
      throw new Error("E-mail incorreto");
    }
  }
  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions,transaction]
    });
    console.log(transaction.amount);
    this.updateBalance(transaction.amount);
  }
  updateBalance =(amount) => {
    console.log(amount);
    const updated = parseFloat(this.state.balance) + parseFloat(amount);
    this.setState({balance: updated.toFixed(2)})
  }


  render(){
    return (
      <div className="container" style={{height: "80vh"}} >
            <RoutesLinks 
              registrar={this.registrar} 
              logar={this.logar} 
              isLoggedIn={this.state.isLoggedIn}
              balance={this.state.balance}
              transactions={this.state.transactions}
              addTransaction={this.addTransaction}
            />
      </div>
    );
  }
}

