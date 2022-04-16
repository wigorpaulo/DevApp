import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/nav";

export default function Home(){


    let[tipo, setTipo] = React.useState('')
    let[descricao, setDescricao] = React.useState('')
    let[valor, setSaldo] = React.useState('')
    let[lista, setLista] = React.useState([])

        React.useEffect(()=>{
        axios.get('http://localhost:4000/financas')
        .then(resp =>{
        console.log(resp)
        setLista(resp.data)
    })
       },[])


    return(
        <>
        <Nav/>

        <form  onSubmit={submit} method="POST">
            <input onChange={e => {setTipo (e.target.value)} } type="text" placeholder="Tipo" /> <br />
            <input onChange={e => {setDescricao (e.target.value)} } type="text"placeholder="Descricao" /> <br />
            <input onChange={e => {setSaldo (e.target.value)} } type="text" placeholder="Valor" /> <br />
    

        </form>

            Home
        <table width="100%">
            <thead>
            <tr>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Valor</th>
            </tr>
            </thead>

            <tbody >
                {
                    lista.map((item,index) => (
                        <tr key={index}>
                            <td>{index}={item.tipo}</td>
                            <td>{item.descricao}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}