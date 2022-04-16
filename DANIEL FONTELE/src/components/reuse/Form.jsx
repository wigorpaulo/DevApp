import React from 'react'

export default function Form(props) {

    const alterarInput = (e) => {
        props.func && props.func(e.target.value)
    }

    return (
        <div className='formContainer'>
            <label className='label'>{props.name}</label>
            <div className='inputContainer'>
                <input className='input'
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={alterarInput}
                    autoComplete="false"
                    min={props.min ?? props.min}
                    step={props.step ?? props.step}
                    value={props.value ?? props.value}
                    />
                <span />
            </div>
        </div>
    )
}

