import React from 'react'
import {Col, Row, Button} from 'reactstrap'
import FrmLogin from '../../components/FrmLogin/FrmLogin'


export default function Login(props){
    
    return (
        <div  >
            <Button onClick={e => props.click()} >teste</Button>
            <Row >
                <Col sm={4}></Col>
                <Col sm={4}>
                    <FrmLogin click={e => props.click()} />
                </Col>
                <Col sm={4}></Col>
            </Row>
        </div>
    )
}
