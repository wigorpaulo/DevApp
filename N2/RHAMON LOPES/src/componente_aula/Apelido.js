import React from "react";

class Apelido extends React.Component{
    constructor(props) {
        super(props);
    }

    alterar = () => {
        this.props.metodo()
    }

    render() {
        return(
            <div>
                <p>O meu apelido é: {this.props.apelido}</p>
                <button onClick={this.alterar}>Alterar</button>
                <hr />
            </div>
        )
    }
}

export default Apelido;
