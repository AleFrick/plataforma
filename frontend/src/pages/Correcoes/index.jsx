import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {Row, Col} from 'reactstrap'


import Marcacao from '../../components/Marcacao'
import Apontar from '../../components/Apontar/Apontar'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavBar from '../../components/NavBar'




export default function Correcoes(props){
    const [iMarcador, setMarcador] = useState([])
    const [iApontador, setApontador] = useState([])

    function criaMarcacao(){
        setMarcador([...iMarcador,'1'])
    }

    function criaApontador(){
        setApontador([...iApontador,'1'])
    }

    
    function handleLogout() {
        localStorage.removeItem('@SuaAplicacao:JWT_TOKEN');
    
        props.history.push('/');
    }
    return(
        <div>  
            <NavBar  />            
            <Row>
                <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar clickMarcacao={e => criaMarcacao()} clickApontar={e => criaApontador()} clickSair={e => handleLogout()} />   
                </Col>
                <Col  xs={10} id="page-content-wrapper">
                    {/*<Button onClick={ e => criaMarcacao() }>Adicionar</Button> */}
                    
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
        </div>
    )
}