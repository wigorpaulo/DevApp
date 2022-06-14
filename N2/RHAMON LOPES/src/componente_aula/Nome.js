import React from "react";
import Apelido from "./Apelido";

class Nome extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <p>O nome é: {this.props.nome}</p>
                <hr />
                <Apelido apelido={this.props.apelido} metodo={this.props.metodo} />
            </div>
        )
    }
}

export default Nome;
