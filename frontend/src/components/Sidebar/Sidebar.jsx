import React from "react";
import {Button} from 'reactstrap'
import './Sidebar.css'

 

export default function aSidebar(props){
    return (
        <div class="sidenav">
                
            <Button  style={{width:'150px'}} onClick={props.clickMarcacao}>+ Marcações</Button>    
                  
            <Button  style={{marginTop:'10px', width:'150px'}} onClick={props.clickApontar}>+ Apontações</Button>                                                                             
        </div>
        );
}