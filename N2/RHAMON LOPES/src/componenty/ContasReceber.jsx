import React from 'react';

class ContasReceber extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valor: this.props.valor,
            descricao: this.props.descricao
        }
    }
    alterarValor = () => {

    }

    alterarDescricao = () =>{

    }
    cadastrarConta =() =>{
        alert("cadastrado com Sucesso")
    }
    sairConta =() =>{
        alert("saida com sucesso")
    }

    render(){
        return(
            <div>
                <h3>Menu</h3>
                <form onSubmit={this.cadastrarConta}>
                    <div>
                    <button type="submit">Contas a Receber</button> 
                    </div>

                    <div>
                    <button type="submit">Contas a Pagar</button>  
                    </div>

                    <div>
                    <form onSubmit={this.sairConta}>
                    <button type="submit">Sair</button>
                    </form>
                    </div>  
                
                </form>
            </div>
        )
    }
}
export default ContasReceber;
