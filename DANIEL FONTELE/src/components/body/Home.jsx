import React from 'react';
import { ReactComponent as Logo } from '../../img/Logo.svg';
import Button from '../reuse/Button';

export default function Home(props) {

    const color = {
        color: 'rgb(65, 65, 65)',
    }

    function logoSize() {
        // if (props.width < props.height) {
        //     return '35vw'
        // } else {
        //     return '5vh'
        // }
        return '200px'
    }

    const logoBuilder = {
        width: logoSize(),
        height: 'auto',
        animation: 'spin 5s ease-in-out infinite',
        marginTop: '4vh',
        top: `calc(50% - ${logoSize()}/2)`,
        left: `calc(50% - ${logoSize()}/2)`,
    }


    return (
        <div style={{width: '100vw', textAlign: 'center'}}>
            <h1 style={color}>Seja Bem-Vindo ao</h1>
            <h1 style={{color: '#f5b402'}}>After Bank</h1>
            <Logo style={logoBuilder} />
            <Button onClick={props.onClick} style={{marginTop: '12vh'}}>Entrar</Button>
        </div>
    )
}