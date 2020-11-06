import React from "react";
import {Button} from 'reactstrap'
import './Sidebar.css'



export default function aSidebar(props){
    return (
        <div class="sidenav">
                
            <Button onClick={props.click}>+ Marcações</Button>
    
        </div>
        );
}