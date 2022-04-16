import React, { useState } from "react";
import TextInput from "../UI/TextInput"
import Button from "../UI/Button"
const Login = (props) =>{
    
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const [checkPass, setCheckPass] = useState("")
    const [email,setEmail] = useState("")
    const today = new Date();


    const registerUser = () =>{
        if(user!=="" && pass!=="" && email!==""){
            if(pass === checkPass){
                var usr = props.Users.find((usr) => usr.user === user)
                if(usr === undefined){
                    props.register({"user":user,"email":email,"senha":pass})
                    props.Add({"id":0,"recebedor":user,"pagador":"root","criacao":today.toLocaleDateString(),"quitacao":today.toLocaleDateString(),"valor":1000,"descricao":"Inicialização de conta"})
                    setUser("")
                    setEmail("")
                    setPass("")
                    setCheckPass("")
                }else{
                    alert("Usuário '" + user +"' já existe")
                }
            }else{
                alert("Senhas não condizem")
            }
        }else{
            alert("Não pode haver compos vazios")
        }
    }

    return(
        <div className="acesso">
            <span className="material-icons">account_circle</span>
            <h2>Cadastro</h2>
            <TextInput type="text" value={user} icon="face" placeholder="Nome de usuário" setValue={setUser}/>
            <TextInput type="password" value={pass} icon="lock" placeholder="Senha" setValue={setPass}/>
            <TextInput type="text" value={email} icon="email" placeholder="E-mail" setValue={setEmail}/>
            <TextInput type="password" value={checkPass} icon="verified" placeholder="Confirmar senha" setValue={setCheckPass}/>
            <Button text="Cadastrar" click={() => registerUser()}/>
            <h4>Já tenho uma conta</h4>
            <Button text="Login" click={()=>props.loginRegister(true)}/>
        </div>
    )
}
export default Login