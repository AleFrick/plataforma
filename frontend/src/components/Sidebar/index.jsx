import React from "react";
import {Button, Col, Row} from 'reactstrap'
import './Sidebar.css'



export default function aSidebar(props){
    return (
        <div class="sidenav">
            <Col>
                
                <Button  style={{width:'150px'}} onClick={props.clickMarcacao}>+ Marcações</Button>    
            
                <Button  style={{marginTop:'10px', width:'150px'}} onClick={props.clickApontar}>+ Apontações</Button>
                
            </Col>

            <Col style={{ bottom:'0', position:'absolute'}}>
                <Button color='danger' style={{marginTop:'10px', width:'150px' }} onClick={props.clickSair}>Sair</Button>
            </Col>
        </div>
        );
}