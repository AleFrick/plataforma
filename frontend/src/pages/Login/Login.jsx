import React from 'react'
import {Col, Row, Button} from 'reactstrap'

import NavBar from '../../components/NavBar'


export default function Login(props){
                 
    return (
        <div  >   
            <NavBar  />  
            <Row >
                <Col sm={4}></Col>
                <Col sm={4}>
                    {/* <FrmLogin /> */}
                </Col>
                <Col sm={4}></Col>
            </Row>
        </div>
    )
}
