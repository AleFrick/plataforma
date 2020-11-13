import React from 'react'
import {Col, Row, Button} from 'reactstrap'
import FrmLogin from '../../components/FrmLogin/FrmLogin'


export default function Login(props){
    
    return (
        <div  >

            <Row >
                <Col sm={4}></Col>
                <Col sm={4}>
                    <FrmLogin />
                </Col>
                <Col sm={4}></Col>
            </Row>
        </div>
    )
}
