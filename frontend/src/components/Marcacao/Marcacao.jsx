import React, { useState } from 'react'
import { 
            Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
            Modal, ModalHeader, ModalBody, Input
       } from 'reactstrap'
import Draggable from 'react-draggable';
import { Resizable }  from 're-resizable'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default function Marcacao(props){
    {/* STATUS BASE */}
    const [marcacao, setMarcacao] = useState(props.marcacao)
    const [numero, setNumero] = useState(props.numero)
    const [corFonte, setCorFonte] = useState('white')

    {/* STATUS DROPDOWN */}
    const [dropdownOpen, setDropdownOpen] = useState(false);    
    const tDropdow = () => setDropdownOpen(prevState => !prevState);
    
    {/* STATUS MODAL */}
    const [modal, setModal] = useState(false);
    const tModal = () => setModal(!modal);
    const [texto, setTexto] = useState('')

    function getCorPorMarcacao(marc){
        /*
            Ortografia - Vermelho 
            Semântica - Verde
            Regência - Laranja 
            Concordância - Lilás 
            Geral - Amarelo
        */        
        if(marc === 'O'){ // ORTOGRAFIA - VERMELHO            
            return 'rgb(248, 3, 21,0.5)'             
        }if(marc === 'G'){ // GERAL - AMARELO            
            return 'rgb(254, 224, 21, 0.5)' 
        }if(marc === 'R'){ // REGENCIA - LARANJA
            return 'rgb(252, 119, 2, 0.5)'
        }if(marc === 'S'){ //SEMANTICA - VERDE
            return 'rgba(0, 185, 21, 0.5)'
        }else{ //CONCORDANCIA - LILAS            
            return 'rgb(199, 43, 234, 0.5)'
        }
    }
    
    function getCorFonte(marc){
        if(marc === 'O'){ // ORTOGRAFIA - VERMELHO            
            return 'white'             
        }if(marc === 'G'){ // GERAL - AMARELO            
            return 'black' 
        }if(marc === 'R'){ // REGENCIA - LARANJA
            return 'white'
        }if(marc === 'S'){ //SEMANTICA - VERDE
            return 'white'
        }else{ //CONCORDANCIA - LILAS            
            return 'white'
        }
    }


    return(
        <div>
        <Modal isOpen={modal} toggle={tModal} >
            <ModalHeader toggle={tModal}>Comentário</ModalHeader>
            <ModalBody>
                <Input type="textarea" value={texto} onChange={e => setTexto(e.target.value)} />
            </ModalBody>            
        </Modal>            
        <Draggable defaultPosition={{x: 100, y: -600}} id={props.pId} >
            
                <Resizable
                    className="item"
                    defaultSize={{
                        width:100,
                        height:100
                      }}
                    style={{ backgroundColor: getCorPorMarcacao(marcacao)}}
                >
                    <div >                                           
                        <Dropdown isOpen={dropdownOpen} toggle={tDropdow}>
                            <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                                style={{fontFamily:"arial black", color:getCorFonte(marcacao) }}
                            >
                                {marcacao} {numero} <FontAwesomeIcon icon={faCog} />  
                            </DropdownToggle>
                             
                            <DropdownMenu>
                                <DropdownItem onClick={e=> tModal()}>Comentário</DropdownItem>   
                                <DropdownItem divider />
                                <DropdownItem onClick={e=> setMarcacao('O')}>Ortografia</DropdownItem>
                                <DropdownItem onClick={e=> setMarcacao('S')}>Semântica</DropdownItem>                                
                                <DropdownItem onClick={e=> setMarcacao('R')}>Regência</DropdownItem>                                                                                                                                                             
                                <DropdownItem onClick={e=> setMarcacao('C')}>Concordância</DropdownItem>                                                                                                                                                             
                                <DropdownItem onClick={e=> setMarcacao('G')}>Geral</DropdownItem>                                                                                                                                                                                                                 
                            </DropdownMenu>
                        </Dropdown>                                                 
                    </div>
                 
                    
                </Resizable>    
     
            </Draggable>
        </div>
    )
}