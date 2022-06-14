import React from "react";

import './Style.css'

const LoadingComponent = () => {

    return (
        <div className="d-block">
            <div className="load bg-white position-absolute d-flex justify-content-center align-items-center">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )

}

export default LoadingComponent