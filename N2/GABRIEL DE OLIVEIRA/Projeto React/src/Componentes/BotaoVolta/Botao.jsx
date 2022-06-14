import {Link} from 'react-router-dom';

const Botao = (props) => {
    return (
        <div className="voltar">
            <Link to={ "/home" }>
                <button class="botao " type="button">Voltar</button>
            </Link>
        </div>
    );
}   
export default Botao;