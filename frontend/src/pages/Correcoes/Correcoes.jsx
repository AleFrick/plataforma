import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {Row, Col} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import Marcacao from '../../components/Marcacao/Marcacao'
import Apontar from '../../components/Apontar/Apontar'
import Sidebar from '../../components/Sidebar'
import NavBar from '../../components/NavBar'
import { RemoveToken } from '../../js/aux_token.js'




export default function Correcoes({history}){
    const [iMarcador, setMarcador] = useState([])
    const [iApontador, setApontador] = useState([])

    function criaMarcacao(){
        setMarcador([...iMarcador,'1'])
    }

    function criaApontador(){
        setApontador([...iApontador,'1'])
    }

    function handleLogout() {       
        //localStorage.removeItem('@SuaAplicacao:JWT_TOKEN');    
        RemoveToken();
        history.push('/');
    }
    return(
        <div>      
            
            {/* <NavBar />  */}
            
            {/* <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar clickMarcacao={e => criaMarcacao()} clickApontar={e => criaApontador()} clickSair={e => handleLogout()}/>   
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                                       
                    <img style={{position:'absolute', zIndex:'-1', left:'0px', top:'0px'}} src='https://image.slidesharecdn.com/7anoomelhortextodomundodostimoanoderecuperao-171129192230/95/7-ano-o-melhor-texto-do-mundo-do-stimo-ano-de-recuperao-1-638.jpg?cb=1511983379' />                                           
                    
                    {iMarcador.map((iMarcador, i) => <Marcacao key={`marcacao_${i}`} 
                                                               id={`marcacao_${i}`} 
                                                               numero='1' 
                                                               marcacao='S' 
                    />)}    
                                                   
                    {iApontador.map((iApontador, i) => <Apontar key={`apontador_${i}`} 
                                                                id={`apontador_${i}`} 
                                                                numero='1' 
                                                                marcacao='S'
                                                                
                    />)}
                </Col>
            </Row> */}
            <header>
                <NavBar />
            </header>
            <main className='pt-5'>
                <Row>
                    <Col xs={2} >      
                        <Sidebar clickMarcacao={e => criaMarcacao()} clickApontar={e => criaApontador()} clickSair={e => handleLogout()}/>   
                    </Col>
                    <Col xs={10}>
                        <img style={{position:'absolute', zIndex:'-1', left:'0px', top:'0px'}} src='https://image.slidesharecdn.com/7anoomelhortextodomundodostimoanoderecuperao-171129192230/95/7-ano-o-melhor-texto-do-mundo-do-stimo-ano-de-recuperao-1-638.jpg?cb=1511983379' />                                           
                        
                        {iMarcador.map((iMarcador, i) => <Marcacao key={`marcacao_${i}`} 
                                                                id={`marcacao_${i}`} 
                                                                numero='1' 
                                                                marcacao='S' 
                        />)}    
                                                    
                        {iApontador.map((iApontador, i) => <Apontar key={`apontador_${i}`} 
                                                                    id={`apontador_${i}`} 
                                                                    numero='1' 
                                                                    marcacao='S'
                                                                    
                        />)}
                    </Col>
                </Row>
            </main>
        </div>
    )
}