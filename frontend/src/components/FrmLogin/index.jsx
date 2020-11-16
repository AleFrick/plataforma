import React from 'react'
import { Input, Form, Button } from 'reactstrap'

export default function FrmLogin(props){
    return(
        <>  
            <Form className="form-inline my-2 my-lg-0">
                <Input className="form-control mr-sm-2" 
                    value={props.user} onChange={props.setUser}  
                    type="mail" placeholder="Usuário" 
                    aria-label="Usuário" 
                    onKeyPress={props.pressEnter } 
                />
                <Input className="form-control mr-sm-2" 
                    value={props.pass} onChange={props.setPass} 
                    type="password" placeholder="Senha" aria-label="Senha" 
                    onKeyPress={props.pressEnter }
                />
                <Button className="btn my-2 my-sm-0" outline color='success' 
                    onClick={props.loginClick}
                >Login</Button>
            </Form>
        </>
    )
}