import React,{useState} from 'react'

const TextInput = (props) =>{
    const [showPass, setShowPass] = useState(false)
    const [type, setType] = useState(props.type)

    const EyeButtonClick =(view)=>{

        setShowPass(view);
        if(view){
            setType("text")
        }else{
            setType("password")
        }
    }

    function showEyeButton(){
        if(props.type === "password"){
           return <span className="material-icons" onClick={() => EyeButtonClick(!showPass)}> {showPass ? "visibility" : "visibility_off"} </span> 
        } 
    }

    return(
        <div className='input'>
            <span className="material-icons">
                {props.icon}
            </span>
            <input type={type} placeholder={props.placeholder}  onChange={e => props.setValue(e.target.value)} value = {props.value}/>
            {showEyeButton()}
        </div>
    )
}
export default TextInput;