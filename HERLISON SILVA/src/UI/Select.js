import React from 'react'

const Select = (props) =>{
    return(
        <div className='select'>
            <select>
                {console.log(props.dados)}
                {props.dados.map((dado) => {return <option value={dado.chave}> {dado.value}</option>})}
            </select>
        </div>
    )
}
export default Select;