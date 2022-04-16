import React from "react";
const Aside = (props) =>{

    return(
        <div className="aside">
            <div className="esquerda">
                <span className="material-icons" onClick={()=>props.addConta()}> {!props.add ? "add_circle" : "save"}</span>
            </div>
            <div className="direita">
                <span className="material-icons" onClick={()=>props.setViewType(false)}>view_list</span>
                <span className="material-icons" onClick={()=>props.setViewType(true)}>grid_view</span>
            </div>
        </div>
    )
}
export default Aside