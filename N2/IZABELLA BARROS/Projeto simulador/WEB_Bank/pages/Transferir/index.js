import React,{useState} from "react";
import {Form,Button,Card } from 'react-bootstrap';
import Header from '../../header';
import axios from '../../api/axios';
import{ useHistory} from "react-router-dom";


const Transferir = (props) =>{
    const history = useHistory();
    const [cpfDestino, setCpfDestino] = useState("");
    const [valor, setValor] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));


    const handleSubmit=(e)=>{
        e.preventDefault();
      
        axios.post("/transferencia",{
            idOrigem: user.id,
            cpfDestinario: cpfDestino,
            valor:valor
        }).then(() =>{
            history.push("/home",alert("Tranferido com suceso"));
        }).catch(error => {
            if(error.response.status === 500){
               alert("CPF inválido")
            }
        });

    }

    
    return(
        
        <div>
             <Header> </Header>
                    <Card className="mx-auto" style={{ width: '70rem', height: '24rem'}}>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2">
                                    <Form.Label style={{fontSize:"15px"}}>CPF do destinatário:</Form.Label>
                                    <Form.Control style={{height:"45px" , fontSize: "15px"}} type="text" placeholder="Ex:000.000.000-00"  
                                    value={cpfDestino}
                                    onChange={e => setCpfDestino(e.target.value)}></Form.Control> 
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label style={{fontSize:"15px"}}>Valor (R$):</Form.Label>
                                    <Form.Control style={{height:"44px" , fontSize: "15px"}} type="number" 
                                    value={valor}
                                    onChange={e => setValor(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" size="lg">
                                   Transferir
                                </Button>
                            </Form>
                        </Card.Body>
                     </Card>
            </div>
          
    )
} 


export default Transferir;