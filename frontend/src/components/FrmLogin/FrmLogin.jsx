import { formatMs } from '@material-ui/core'
import React, {useState} from 'react'
import {
    Form, FormGroup, Label, Row, Col, Input, Button
} from 'reactstrap'

export default function Login(props){
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')

    function Logar(){
        let expirarem = new Date().getTime() + (60000 * 5)
        if(pass === 'bobariga' && user === 'admin'){
            sessionStorage.setItem('@nome-do-app/isLogged',JSON.stringify({
                "value": true,
                "expires": expirarem
            }))
            window.location.href = '/'  
        }else{
            sessionStorage.setItem('@nome-do-app/isLogged',JSON.stringify({
                "value": false,
                "expires": expirarem
            }))
        }
    }

    return (
        <>  
           <Row>
               <Col>
                   {/* <Form> */}
                   {/*     <FormGroup> */}
                            <Input name="userLogin" id="userLogin" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
                            <Input type="password" name="senhaLogin" id="senhaLogin" value={pass} onChange={e => setPass(e.target.value)} placeholder="Senha" />
                            <Button style={{marginTop:'10px'}} onClick={e => Logar()}>Entrar</Button>
                    {/*    </FormGroup> */}
                  {/*  </Form> */}
               </Col>
           </Row>
        </>
    )
}