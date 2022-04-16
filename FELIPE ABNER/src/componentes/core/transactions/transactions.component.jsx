import React, { Component } from 'react';
import './transactions.style.css';
import Card from './card/card.component';
import BackButton from '../shared/backButton/backButton.component';
import { Navigate } from 'react-router-dom';

export default class Transactions extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
          <div>
                { this.props.isLoggedIn == false && (<Navigate to="/" replace={ true } />) }
                <BackButton/>
                <div>
                <div className='mb-5'>
                    <h4>Transações </h4>
                    <h6>Total: {this.props.transactions.length}</h6>
                </div>
                <div>
                        {this.props.transactions.map(({amount,type,date})=>{
                            return <Card amount={amount} type={type} date={date} />;
                        })}
                    </div>
                </div>
          </div>
        )
    }
}

