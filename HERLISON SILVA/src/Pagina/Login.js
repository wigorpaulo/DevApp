import React, { useState } from "react";
import TextInput from "../UI/TextInput"
import Button from "../UI/Button"
const Login = (props) =>{
    
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const [err, setErr] = useState("")

    const InUser = (e) =>{
        setUser(e)
        props.setUser(e)
    }

    const validateUser = () =>{
        if(pass!=="" && user!==""){
            var usr = props.Users.find((usr) => usr.user === user)
            if(usr !== undefined){
                if(usr.senha === pass){
                    props.login()
                }else{
                    setErr("senha incorreta")
                }
            }else{
                setErr("usuário não existe")
            }
        }
        else{
            setErr("preencha todos os campos")
        }
    }

    return(
        <div className="acesso">
            <span className="material-icons">account_circle</span>
            <h2>Acesso</h2>
            <TextInput type="text" value={user} icon="face" placeholder="Nome de usuário" setValue={InUser}/>
            <TextInput type="password" value={pass} icon="lock" placeholder="Senha" setValue={setPass}/>
            <err> {err}</err>
            <Button text="Entrar" click={() => validateUser()}/>
            <h4>Não tenho conta</h4>
            <Button text="Criar conta" click={()=>props.loginRegister(false)}/>
        </div>
    )
}
export default Login