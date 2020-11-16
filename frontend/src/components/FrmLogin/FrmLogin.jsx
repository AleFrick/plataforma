import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import {
    Form, FormGroup, Row, Col, Input, Button
} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  setLogin  } from '../../js/aux_token'
import { typeMsg, notificacao } from '../../js/msg'

export default function Login(props){
    let history = useHistory();
    const [show, setShow] = useState(false);
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')    

    const [pass] = useState('bobariga')
    const [user] = useState('admin')
    
 
    
    function handleLogin() {
        
        if(usuario === user && senha === pass){
            setLogin('teste')
            history.push('/correcoes')
        }else{            
            if(usuario.trim() === '' || senha.trim() === ''){
                notificacao('Informe o usuário e a senha', typeMsg.warn, toast)
            }else{
                notificacao('Usuário inválido', typeMsg.warn, toast) 
            }            
        }
    }

    function pressEnter(e){        
        if(e.key === 'Enter'){
            if(usuario.trim() === '' || senha.trim() === ''){
                notificacao('Informe o usuário e a senha', typeMsg.warn, toast)
            }else{
                handleLogin()
            }            
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
                                   onKeyPress={e => pressEnter(e)}
                            />
                            <Input type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" 
                                   value={senha} onChange={e => setSenha(e.target.value)}
                                   onKeyPress={e => pressEnter(e)}
                            />
                            <Button style={{marginTop:'10px'}} onClick={e => handleLogin()}>Entrar</Button>
                        </FormGroup>
                    </Form>
               </Col>
              
           </Row>     
              
        </>
    )
}