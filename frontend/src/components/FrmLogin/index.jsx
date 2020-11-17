import React, {useState} from 'react'
import { Input, Form, Button } from 'reactstrap'
import { IsLogged, RemoveToken } from '../../js/aux_token'
import { useHistory } from 'react-router-dom'


export default function FrmLogin(props){
    
    function efetuarLogout() {       
        //localStorage.removeItem('@SuaAplicacao:JWT_TOKEN');    
        RemoveToken();
        props.history.push('/');
    }


    function IsGuest(props){  
        const [user, setUser] = useState()
        const [pass, setPass] = useState()

        if(!IsLogged() ){            
            return(
                <Form className="form-inline my-2 my-lg-0">
                    <Input className="form-control mr-sm-2" 
                        value={user} onChange={e => setUser(e.target.value)}
                        type="mail" placeholder="Usuário" 
                        aria-label="Usuário" 
                    />
                    <Input className="form-control mr-sm-2" 
                        value={pass} onChange={setPass} 
                        type="password" placeholder="Senha" aria-label="Senha"                         
                    />
                    <Button className="btn my-2 my-sm-0" outline color='success' 
                    >Entrar</Button>
                </Form>
            )
        }else{
            return(
                <Form className="form-inline my-2 my-lg-0">
                    <>Seja Bem vindo Administrador</>
                    <Button className="btn my-2 my-sm-0" outline color='danger'                     
                    onClick={ e => efetuarLogout() }
                    >Sair</Button>
                </Form>
            )   
        }
    }


    return(
        <>  
            {/* <Form className="form-inline my-2 my-lg-0"> */}
                <IsGuest 
                    userValu={props.user} userChange={props.setUser} keyPress={props.pressEnter}                    
                />
                {/* <Input className="form-control mr-sm-2" 
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
                >Login</Button> */}
            {/* </Form> */}
        </>
    )
}