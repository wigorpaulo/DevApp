import React from 'react';

export default function Header(props) {

    // Styles
    const fontSize = props.fontSize || '1.5rem'

    const header = {
        position: 'absolute',
        backgroundColor: '#F5B402',
        height: '11vh',
        width: '100%',
    }

    const titleText = {
        textAlign: 'center',
        fontSize: fontSize,
        marginTop: '0px',
        paddingTop: `calc(5.5vh - ${fontSize}/1.5)`,
        color: '#707070',
    }

    const backButton = {
        width: fontSize,
        height: fontSize,
        content: "",
        backgroundColor: "transparent",
        position: 'absolute',
        left: `calc(5.5vh - ${fontSize}/1.5 + ${fontSize}/2)`,
        top: `calc(5.5vh - ${fontSize}*1.5)`,
        transform: `rotate(225deg)`,
        borderTop: `calc(${fontSize} / 5) solid #707070`,
        borderRight: `calc(${fontSize} / 5) solid #707070`,
        borderLeft: 'none',
        borderBottom: 'none',
        borderRadius: `10%`,
        cursor: 'pointer',
        visibility: props.showButton ? 'visible' : 'hidden',
    }

    return (
        <div style={header}> {/* 11vh */}
            <button style={backButton} onClick={props.goBack}></button>
            <h1 style={titleText}>{props.actualPage}</h1>
        </div>
    )
}