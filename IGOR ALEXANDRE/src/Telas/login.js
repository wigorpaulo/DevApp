import React, { useState } from "react";

const Login = (props) =>
{

    const [cadastrando, setCadastrando] = useState(false)
    const [cadastrado, setCadastrado] = useState(false)
    const [ver1, setVer1] = useState(false)
    const [ver2, setVer2] = useState(false)
    const [ver3, setVer3] = useState(false)
    const[erro, setErro] = useState("Acesso!")

    const [email1, setEmail1] = useState("")
    const [senha1, setSenha1] = useState("")
    const [email2, setEmail2] = useState("")
    const [senha2, setSenha2] = useState("")
    const [confirmar, setConfirmar] = useState("")

    const [usuarios, setUsuarios] = useState([])

    const cadastrou = (cadastrar) => {

        if (cadastrar){
            if (senha1 === confirmar && senha1 !== "" && confirmar !== "" && email1 !== ""){
                var senhaUsr = "";

                usuarios.map(({email, senha},index) =>(
                    <div>
                        {
                            email === email1 ? senhaUsr = senha1 : ""
                        }
                    </div>
                ));
                
                if(senhaUsr === ""){
                    usuarios.push({
                        "email" : email1, "senha" : senha1
                    })
                    setCadastrando(!cadastrar)
                    setCadastrado(cadastrar)
                    props.iniciaSaldo({"valor":1000,"data":"","usuario":email1,"desc":"Inicialização de saldo","recebida":true})
                    setConfirmar("")
                    setEmail1("")
                    setSenha1("")
                    setVer1(false)
                    setVer2(false)
                }else{
                    setConfirmar("")
                }
            } else {
                setConfirmar("")
            }
        } else {
            setCadastrando(!cadastrar)
            setCadastrado(cadastrar)
        }
    }

    const valida = () => {

        var validado = false;
        var encontrado = {}
        encontrado = usuarios.filter((usr) => {
            return usr.email===email2
        })

        if(encontrado.length === 0)
        {
            setErro("Usuario não encontrado!")
        }
        if(email2 === "" || senha2 === "") 
        {
            setErro("Preencha todos os campos!")
        }
        if(encontrado[0].senha === senha2)
        {
            validado = true
        }else{
            validado = false
        }
        if (validado){
            props.metodo(encontrado[0])
        }
    }

    return(
        <div className="login">
            <div className="esquerda">
                <div className="logo">
                    <img src = "https://3.bp.blogspot.com/-0JedUerOYlY/Vxq0V8YybeI/AAAAAAAABgw/oxwQM1jdbT4h_iZvW7DSSe3ZgwU0im_ugCLcB/s1600/arabescos5.png"/>
                </div>
                    {
                    cadastrando ? 
                    <div className="formulario formulario-direita">
                        <div className="input">
                            <span className="material-icons icone">
                                mail_outline
                            </span>
                            <input placeholder="email" type="text"onChange={e=>setEmail1(e.target.value)} value ={email1}></input>
                            <span className="material-icons icone" onClick={() => setVer1(false)}>
                                        
                                    </span> 
                        </div>
                        <div className="input">
                            <span className="material-icons icone">
                                lock
                            </span>
                            <input placeholder="Senha" type={ver1?"text":"password"} onChange={e=>setSenha1(e.target.value)} value ={senha1}></input>
                            {
                                ver1 ? 
                                    <span className="material-icons icone eye" onClick={() => setVer1(false)}>
                                        visibility
                                    </span> 
                                : 
                                    <span className="material-icons icone eye" onClick={() => setVer1(true)}>
                                        visibility_off
                                    </span>
                            }
                        </div>
                        <div className="input">
                            <span className="material-icons icone">
                            verified_user
                            </span>
                            <input placeholder="Confirmar Senha" type={ver2?"text":"password"}onChange={e=>setConfirmar(e.target.value)} value ={confirmar} ></input>
                            {
                                ver2 ? 
                                    <span className="material-icons icone eye" onClick={() => setVer2(false)}>
                                        visibility
                                    </span> 
                                : 
                                    <span className="material-icons icone eye" onClick={() => setVer2(true)}>
                                        visibility_off
                                    </span>
                            }
                        </div>
                        <button onClick={()=>cadastrou(true)}>Cadastrar</button>
                    </div>
                    :
                    <div className="formulario">
                        <h1>{cadastrado ? "Usuario cadastrado!":"Não tenho conta!"}</h1>
                        <div className="cadastro">
                            <button type="submit" onClick={()=>cadastrou(false)}>
                                CADASTRAR
                            </button>    
                        </div>                   
                    </div>
                    }
                </div>

            <div className="direita">
                <div className="logo">
                 <span className="material-icons">
                     person_outline
                </span>
                </div>
                <div className="formulario formulario-direita">
                    <h1>
                        {erro}
                    </h1>
                    <div className="input">
                        <span className="material-icons icone">
                            mail_outline
                        </span>
                        <input placeholder="E-mail" type="text" onChange={e=>setEmail2(e.target.value)} value ={email2}></input>
                        <span className="material-icons icone">
                        </span>
                    </div>
                    <div className="input">
                        <span className="material-icons icone">
                            lock
                        </span>
                        <input placeholder="Senha" type={ver3?"text":"password"}onChange={e=>setSenha2(e.target.value)} value ={senha2}></input>
                        {
                                ver3 ? 
                                    <span className="material-icons icone eye" onClick={() => setVer3(false)}>
                                        visibility
                                    </span> 
                                : 
                                    <span className="material-icons icone eye" onClick={() => setVer3(true)}>
                                        visibility_off
                                    </span>
                            }
                    </div>
                    <button onClick={valida}>Entrar</button>
                </div>
            </div>
        </div>
    )
}
export default Login;