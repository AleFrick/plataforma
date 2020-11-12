import { formatMs } from '@material-ui/core'
import React from 'react'
import {
    Form, FormGroup, Label, Row, Col, Input, Button
} from 'reactstrap'

export default function Login(props){
    return (
        <>  
           <Row>
               <Col>
                    <Form>
                        <FormGroup>
                            <Input name="userLogin" id="userLogin" placeholder="Usuário" />
                            <Input type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" />
                            <Button style={{marginTop:'10px'}} onclick={props.click}>Entrar</Button>
                        </FormGroup>
                    </Form>
               </Col>
           </Row>
        </>
    )
}