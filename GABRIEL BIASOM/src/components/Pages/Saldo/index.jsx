import React, { Component } from 'react';
import ConteudoSaldo from "./ConteudoSaldo";

export default function Saldo() {

  let saldo = 1000;

  return (
    <div>
      <h1 className="">Saldo {saldo}</h1>
      <p className="">
        <ConteudoSaldo />
      </p>
    </div>
  );
}


// export default class PaymentReceive extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             amount: 0,
//             sended: false,
//         }
//     }
//     onChangeAmount = (e) => {
//         this.setState({ amount: e.target.value })
//     }
//     onSubmitPayment = () => {
//         const transaction = { amount: this.state.amount, date: new Date(), type: 'received' };
//         this.props.addTransaction(transaction);
//         this.setState({ sended: true });
//     }
//     render() {
//         return (
//             <div className='container'>
//                 { this.state.sended && (<Navigate to="/app" replace={ true } />) }
//                 { this.props.isLoggedIn == false && (<Navigate to="/" replace={ true } />) }

//                 <BackButton/>

//                 <div className='row'>
//                     <h4 >Total Balance: <span>R$ { this.props.balance }</span></h4>
//                 </div>
//                 <div className='row mt-3'>
//                     <h5>Receber Pagamento</h5>
//                 </div>
//                 <div className='row d-flex justify-content-center'>
//                     <div className='col-6'>
//                         <div className='form-group'>
//                             {/* <label for="amount" className="form-label">Amount</label> */ }
//                             <input type="number" className="form-control" min='0' step="0.01"
//                                 value={ this.state.amount } onChange={ this.onChangeAmount } />
//                         </div>
//                     </div>
//                     <div className='col-1'>
//                         <button className="btn btn-primary " type="button" onClick={ this.onSubmitPayment }>Enviar</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }