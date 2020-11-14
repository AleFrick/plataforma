import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import {
    Form, FormGroup, Row, Col, Input, Button
} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(props){
    let history = useHistory();
    const [show, setShow] = useState(false);
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    

    const [pass] = useState('bobariga')
    const [user] = useState('admin')
    
    function notificacao(message, type){        
        if(message.trim !== ''){
            switch (type) {
                case 'success':
                    toast.success(message);
                    break;
                case 'warn':
                    toast.warn(message);
                    break;
                case 'error':
                    toast.error(message);
                    break;
                default:
                    toast.info(message);
            }
        }
    }    
    
    function handleLogin() {
        
        if(usuario === user && senha === pass){
            localStorage.setItem('@SuaAplicacao:JWT_TOKEN', 'seutokenjwt');            
            history.push('/correcoes')
        }else{            
            notificacao('Usuário inválido', 'warn') 
        }
    }

    return (
        <>   <ToastContainer />       
           <Row>
               <Col>
                    <Form >
                        <FormGroup>
                            <Input name="userLogin" value={usuario}
                                   onChange={e => setUsuario(e.target.value)} 
                                   id="userLogin" placeholder="Usuário" 
                            />
                            <Input type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" 
                                   value={senha} onChange={e => setSenha(e.target.value)}
                            />
                            <Button style={{marginTop:'10px'}} onClick={e => handleLogin()}>Entrar</Button>
                        </FormGroup>
                    </Form>
               </Col>
              
           </Row>     
              
        </>
    )
}