import React from "react";
const ListCard = (props) =>{

    function renderList(){
        return(
            props.dados.map((dado) => {
                return (
                    <li>
                        Conta: {dado.id} | Valor: {dado.valor} | Recebedor: {dado.recebedor} | Pagador: {dado.pagador} | Descricao: {dado.descricao} | Data cadastro: {dado.criacao}
                    </li>
                )
            })
        )
    }

    return(
        <div className="list-card">
            <ul>
             {renderList()}
            </ul>
        </div>
    )
}
export default ListCard