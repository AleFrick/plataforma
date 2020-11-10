import React, {useState} from 'react'
import {Row, Col} from 'reactstrap'

import Marcacao from '../../components/Marcacao/Marcacao'
import Apontar from '../../components/Apontar/Apontar'
import Sidebar from '../../components/Sidebar/Sidebar'




export default function Correcoes(){
    const [iMarcador, setMarcador] = useState([])
    const [iApontador, setApontador] = useState([])

    function criaMarcacao(){
        setMarcador([...iMarcador,'1'])
    }

    function criaApontador(){
        setApontador([...iApontador,'1'])
    }

    return(
        <div>  
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar clickMarcacao={e => criaMarcacao()} clickApontar={e => criaApontador()} />   
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    {/*<Button onClick={ e => criaMarcacao() }>Adicionar</Button> */}
                    
                    <img style={{position:'absolute', zIndex:'-1', left:'0px', top:'0px'}} src='https://image.slidesharecdn.com/7anoomelhortextodomundodostimoanoderecuperao-171129192230/95/7-ano-o-melhor-texto-do-mundo-do-stimo-ano-de-recuperao-1-638.jpg?cb=1511983379' />                                           
                    
                        {iMarcador.map((iMarcador, i) => <Marcacao key={`marcacao_${i}`}  numero='1' marcacao='S' key={`marc_${i}`} />)}    
                                                   
                     {iApontador.map((iApontador, i) => <Apontar key={`marcacao_${i}`}  numero='1' marcacao='S' key={`marc_${i}`} />)}
                </Col>
            </Row>
        </div>
    )
}