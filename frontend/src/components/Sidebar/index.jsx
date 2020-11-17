import React, { useState } from "react";
 import { Collapse, NavbarToggler, NavbarBrand, Navbar, Nav, NavItem, NavLink, Col, Button} from 'reactstrap';  
import './Sidebar.css'



export default function SideBar(props){
    
    return (
        // <div className="sidenav" >
        //     <Col>
                
        //         <Button  style={{width:'150px'}} onClick={props.clickMarcacao}>+ Marcações</Button>    
            
        //         <Button  style={{marginTop:'10px', width:'150px'}} onClick={props.clickApontar}>+ Apontações</Button>
                
        //     </Col>

        //     <Col style={{ bottom:'0', position:'absolute'}}>
        //         <Button color='danger' style={{marginTop:'10px', width:'150px' }} onClick={props.clickSair}>Sair</Button>
        //     </Col>
        // </div>           
        <div>   
            <Navbar color="light" light  expand="md" style={{position:'fixed', height:'100%'}}>
                <Nav vertical style={{height:'100%'}}>                    
                    <NavItem style={{marginTop:'10px'}}>
                        <Button  style={{width:'150px'}} onClick={props.clickMarcacao}>+ Marcações</Button>    
                    </NavItem>
                    <NavItem>
                        <Button  style={{marginTop:'10px', width:'150px'}} onClick={props.clickApontar}>+ Apontações</Button>
                    </NavItem>
                </Nav>
                
            </Navbar>         
        </div>
    )
}