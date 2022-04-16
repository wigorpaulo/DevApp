import React from 'react';

export default function Button(props) {
    return (
        <div className='buttonContainer'>
            <button className='btn'
                    onClick={props.onClick}
                    style={props.style ?? props.style}>{props.children}</button>
        </div>
    )
}