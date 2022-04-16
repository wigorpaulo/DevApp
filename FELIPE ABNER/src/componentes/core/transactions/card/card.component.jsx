const Card = (props) => {
    return (
        <div className="card mb-3" >
            <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */ }
                {props.type === 'received' &&  <h6 className="card-subtitle mb-2 text-success">{ props.type }</h6>}
                {props.type === 'sended' &&  <h6 className="card-subtitle mb-2 text-danger">{ props.type }</h6>}
                <p className="card-text">Amount: R$ { props.amount }</p>
            </div>
            <div className="card-footer">
                <span className="text-muted">Data da Transaçāo: { new Intl.DateTimeFormat('pt-BR',
                        { 
                            year: 'numeric', 
                            month: '2-digit', 
                            day: '2-digit', 
                            hour: '2-digit', 
                            minute: '2-digit', 
                            second: '2-digit' 
                        }).format(props.date) }</span>
            </div>
        </div>
    )
}
export default Card;