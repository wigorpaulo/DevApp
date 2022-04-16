const Card = (props) => {
    return (
        <div className="card mb-3" >
            <div className="card-body">
                
                {props.type === 'received' &&  <h6 className="card-subtitle mb-2 text-success">{ props.type }</h6>}
                {props.type === 'sended' &&  <h6 className="card-subtitle mb-2 text-danger">{ props.type }</h6>}
                <p className="card-text">Amount: R$ { props.amount }</p>
            </div>
        </div>
    )
}
export default Card;