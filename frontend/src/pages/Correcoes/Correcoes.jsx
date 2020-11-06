import React, {useState} from 'react'
import {Button, Row, Col} from 'reactstrap'

import Marcacao from '../../components/Marcacao/Marcacao'
import Sidebar from '../../components/Sidebar/Sidebar'




export default function Correcoes(){
    const [item, setItem] = useState([])

    function criaMarcacao(){
        setItem([...item,'1'])
        console.log(item.length)
    }

    return(
        <div>  
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar click={e => criaMarcacao()} />   
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    {/*<Button onClick={ e => criaMarcacao() }>Adicionar</Button> */}
                    <img src='https://image.slidesharecdn.com/7anoomelhortextodomundodostimoanoderecuperao-171129192230/95/7-ano-o-melhor-texto-do-mundo-do-stimo-ano-de-recuperao-1-638.jpg?cb=1511983379' />                                           
                    
                    
                        {item.map((item, i) => <Marcacao key={`marcacao_${i}`} numero='1' marcacao='S' key={`marc_${i}`} />)}
                </Col> 
            </Row>
        </div>
    )
}