import React from "react";
class CadastroConta extends React.Component{

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

    render(){
        return(
            <div>
                <h3>Lançamento de Contas</h3>
                <form onSubmit={this.cadastrarConta}>
                    <div>
                        <label>Valor</label>
                        <input type="text" value={this.state.valor} onChange={this.alterarValor} />
                    </div>

                    <div>
                        <label>Descrição</label>
                        <input type="text" value={this.state.descricao} onChange={this.alterarDescricao}/>
                    </div>
                    
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}
export default CadastroConta;