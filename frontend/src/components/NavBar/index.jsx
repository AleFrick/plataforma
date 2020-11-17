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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IsLogged, setLogin, RemoveToken } from '../../js/aux_token'
import { typeMsg, notificacao } from '../../js/msg'
import FrmLogin from '../FrmLogin'


export default function NavBar (props) {
  let history = useHistory();
  const [stLogin, setLogged] = useState(IsLogged)
  const [isOpen, setIsOpen] = useState(false);
  const [pass, setPass] = useState('')  
  const [user, setUser] = useState('')
  const [userLogName, setUserLogName] = useState()
  const [USUARIO]  = useState('admin')
  const [SENHA]  = useState('bobariga')

  const toggle = () => setIsOpen(!isOpen);

  function login(nome, senha){       
    
    if(nome === USUARIO && senha === SENHA){      
      setLogin('admin')
      setUserLogName('Admin')         
      history.push('/correcoes')
    }else{
      notificacao('😣 Usuário ou Senha estão inválidos',  typeMsg.warn, toast)
    }
  }
  
  function pressEnter(e, nome, senha){        
    if(e.key === 'Enter'){
        if(nome === '' || senha === ''){
            notificacao('🙃 Informe o usuário e a senha', typeMsg.warn, toast)
        }else{
            login(nome, senha)
        }            
    }        
}

/* CAMPOS PARA LOGIN OU LOGOUT */
function CamposLogin(props){      
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const [userLogName] = useState(props.nameShow)

  if(IsLogged() === false){    
    return (
        <Form className="form-inline my-2 my-lg-0">
        <Input className="form-control mr-sm-2" 
              value={user} onChange={e => setUser(e.target.value)} 
              type="mail" placeholder="Usuário" 
              aria-label="Usuário" 
              onKeyPress={e => pressEnter(e, user, pass )}
        />
        <Input className="form-control mr-sm-2" 
              value={pass} onChange={e => setPass(e.target.value)} 
              type="password" placeholder="Senha" aria-label="Senha" 
              onKeyPress={e => pressEnter(e, user, pass) }
        />
        <Button className="btn my-2 my-sm-0" outline color='success' 
          onClick={e => login(user, pass)}
        >Login</Button>
    </Form> 
    )
  }else{    
    return (      
      <Form className="form-inline my-2 my-lg-0">        
        <span style={{marginRight:'10px'}}> Bem vindo {userLogName} </span>
        <Button className="btn my-2 my-sm-0" 
                onClick={ e => logOut() } 
                outline color='danger'                 
        >Sair</Button>        
      </Form>
    )
  }
}

function logOut(){  
  RemoveToken();
  setUserLogName('')
  history.push('/')  
}

return (

    <div style={{zIndex:'0', position:'fixed', width:'100%'}}>      {/* VER PARA NAO CONFLITAR COM COMPONENTE Z-INDEX */}
      <ToastContainer />   
      <Navbar color="light" light  expand="md" >
        <NavbarBrand href="/">EntreLinhas</NavbarBrand> {/* COLOCARO CAMINHO DEPOIS */}
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar> 
            <NavItem>
              <NavLink href="/correcoes">Sobre</NavLink> {/* COLOCARO CAMINHO DEPOIS */}
            </NavItem>
            <NavItem>
              <NavLink href="/correcoes">Planos</NavLink> {/* COLOCARO CAMINHO DEPOIS */}
            </NavItem>
            
          </Nav>
          <CamposLogin  nameShow={userLogName} /> 
         
        </Collapse>
        
      </Navbar>          
    </div>
  );
}
