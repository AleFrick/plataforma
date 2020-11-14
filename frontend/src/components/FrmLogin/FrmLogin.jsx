import { formatMs } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Form, FormGroup, Label, Row, Col, Input, Button
} from 'reactstrap'

export default function Login(props){
    let history = useHistory();
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const [pass] = useState('bobariga')
    const [user] = useState('admin')

    function handleLogin() {
        
        if(usuario === user && senha === pass){
            localStorage.setItem('@SuaAplicacao:JWT_TOKEN', 'seutokenjwt');            
            history.push('/correcoes')
        }else{
            alert('errado')
        }
    }

    return (
        <>  
           <Row>
               <Col>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Input name="userLogin" value={usuario}
                                   onChange={e => setUsuario(e.target.value)} 
                                   id="userLogin" placeholder="Usuário" 
                            />
                            <Input type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" 
                                   value={senha} onChange={e => setSenha(e.target.value)}
                            />
                            <Button style={{marginTop:'10px'}} type="submit">Entrar</Button>
                        </FormGroup>
                    </Form>
               </Col>
           </Row>
        </>
    )
}