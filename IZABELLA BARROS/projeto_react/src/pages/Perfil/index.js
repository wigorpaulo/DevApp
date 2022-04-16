import React, { useState }from 'react';
import './perfil.css';
import { MdOutlineMail } from "react-icons/md";
import Header from '../../header'
import { getUsuario } from '../../hooks/useAuth';



const Perfil = () =>{

    const maskCPF = (value) => {
        return value
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})/, "$1-$2")
          .replace(/(-\d{2})\d+?$/, "$1");
    };



    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [oldcpf, setOldCpf] = useState("")
    const [email, setEmail] = useState("")
    
    const usu = getUsuario()
    
    setNome(usu.nome);
    setSobrenome(usu.sobrenome);
    setEmail(usu.email);
    setOldCpf(maskCPF(usu.cpf))

    
    return(
        <div>
               <Header/>
                <div className="cadastro">
                    <form className='div-formulario'>
                        <label className='LabelCadastro'>Nome</label>
                        <div className="Input">
                                <input type="text" 
                                placeholder="Nome"
                                value={nome}
                                disabled
                                ></input>
                            
                            </div>

                            <label className='LabelCadastro'>Sobrenome</label>
                            <div className="Input ">
                                <input type="text" 
                                placeholder="Sobrenome"
                                value={sobrenome}
                                disabled
                                ></input>
                            
                            </div>
                    
                            <label className='LabelCadastro'>Email</label>
                            <div className="Input ">
                                <MdOutlineMail/>
                                <input type="text" 
                                value={email}
                                disabled
                                ></input>
                            </div>

                            <label className='LabelCadastro'>CPF</label>
                            <div className="Input ">
                                <input type="text" 
                                value={oldcpf}
                                disabled
                                ></input>
                            </div>

                            
                            <button type="submit">Atualizar</button>
                    </form>
                
            </div>

        </div>
       
    );
};


export default Perfil;