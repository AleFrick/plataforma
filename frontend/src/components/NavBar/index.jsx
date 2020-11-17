import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Input, Form, Button
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


import { IsLogged, setLogin, RemoveToken } from '../../js/aux_token'
import { typeMsg, notificacao } from '../../js/msg'
import FrmLogin from '../FrmLogin'


export default function NavBar (props) {
  let history = useHistory();
  const [stLogin, setLogged] = useState(IsLogged)
  const [isOpen, setIsOpen] = useState(false);
  const [pass, setPass] = useState('')  
  const [user, setUser] = useState('')
  const [USUARIO]  = useState('admin')
  const [SENHA]  = useState('bobariga')

  const toggle = () => setIsOpen(!isOpen);

  function login(){
    if(user === USUARIO && pass === SENHA){
      setLogin('admin')
      history.push('/correcoes')
      setLogged(IsLogged)
    }else{
      notificacao('😣 Usuário ou Senha estão inválidos',  typeMsg.warn, toast)
    }
  }
  
  function pressEnter(e){        
    if(e.key === 'Enter'){
        if(user.trim() === '' || pass.trim() === ''){
            notificacao('🙃 Informe o usuário e a senha', typeMsg.warn, toast)
        }else{
            login()
        }            
    }        
}

function CamposLogin(props){      
  if(stLogin === true){    
    return (
        <Form className="form-inline my-2 my-lg-0">
        <Input className="form-control mr-sm-2" 
              value={user} onChange={e => setUser(e.target.value)} 
              type="mail" placeholder="Usuário" 
              aria-label="Usuário" 
              onKeyPress={e => pressEnter(e) }
        />
        <Input className="form-control mr-sm-2" 
              value={pass} onChange={e => setPass(e.target.value)} 
              type="password" placeholder="Senha" aria-label="Senha" 
              onKeyPress={e => pressEnter(e) }
        />
        <Button className="btn my-2 my-sm-0" outline color='success' 
          onClick={e => login()}
        >Login</Button>
    </Form> 
    )
  }else{    
    return (
      <Form className="form-inline my-2 my-lg-0">        
        Bem vindo admin           
        <Button className="btn my-2 my-sm-0" 
                onClick={ e => logOut } 
                outline color='success' 
        >Sair</Button>        
      </Form>
    )
  }
}

function logOut(){
  RemoveToken();
  history.push('/')
  setLogin(IsLogged)
}

return (
    <div>
      <ToastContainer />   
      <Navbar color="light" light expand="md" style={{zIndex:'100', position:'fixed', width:'100%'}}>
        <NavbarBrand href="/">EntreLinhas</NavbarBrand> {/* COLOCARO CAMINHO DEPOIS */}
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar> 
            <NavItem>
              <NavLink href="/">Sobre</NavLink> {/* COLOCARO CAMINHO DEPOIS */}
            </NavItem>
            <NavItem>
              <NavLink href="/">Planos</NavLink> {/* COLOCARO CAMINHO DEPOIS */}
            </NavItem>
            
          </Nav>
          <FrmLogin 
            isLogged={stLogin}
            user={user} setUser={e => setUser(e.target.value)}
            pressEnter={e => pressEnter(e)} 
            pass={pass} setPass={e => setPass(e.target.value)}   
            loginClick={e => login()}         
          /> 
          {/* <CamposLogin />  */}
         
        </Collapse>
        
      </Navbar>    
    </div>
  );
}
