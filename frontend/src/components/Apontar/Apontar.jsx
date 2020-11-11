import React, { useState } from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import { 
            Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
            Modal, ModalHeader, ModalBody, Input
       } from 'reactstrap'
import Draggable from 'react-draggable';
import { Resizable }  from 're-resizable'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons'


export default function Apontar(props){
 {/* STATUS BASE */}

 const [numero, setNumero] = useState(props.numero)
 const [corBorda, setCorBorda] = useState('black')
 const vermelho = 'rgb(248, 3, 21)'
 const amarelo = 'rgb(254, 224, 21)'
 const laranja = 'rgb(252, 119, 2)'
 const verde = 'rgba(0, 185, 21)'
 const lilas = 'rgb(199, 43, 234)'

 {/* STATUS DROPDOWN */}
 const [dropdownOpen, setDropdownOpen] = useState(false);    
 const tDropdow = () => setDropdownOpen(prevState => !prevState);
 
 {/* STATUS MODAL */}
 const [modal, setModal] = useState(false);
 const tModal = () => setModal(!modal);
 const [texto, setTexto] = useState('')

 function excluir(value){    
    document.getElementById(value).remove()
 }
 
 return(
     <div id={props.id} style={{ position:'absolute', zIndex:`${numero}`}}>
     <Modal isOpen={modal} toggle={tModal} >
         <ModalHeader toggle={tModal}>Comentário</ModalHeader>
         <ModalBody>
             <Input type="textarea" value={texto} onChange={e => setTexto(e.target.value)} />
         </ModalBody>            
     </Modal>            
     <Draggable defaultPosition={{x: 50, y: 50}} id={props.pId} >
         
             <Resizable
                 className="item"
                 defaultSize={{
                     width:70,
                     height:40
                   }}
                 style={{ background:'rgb(252, 255, 240,0.5)', borderColor: corBorda, borderStyle:'dashed' }}
             >
                 <div >                                           
                     <Dropdown isOpen={dropdownOpen} toggle={tDropdow}>
                         <DropdownToggle
                             tag="span"
                             data-toggle="dropdown"
                             aria-expanded={dropdownOpen}
                             style={{fontFamily:"arial black" }}
                         >
                            {numero} <FontAwesomeIcon icon={faCog} />  
                         </DropdownToggle>
                          
                         <DropdownMenu>                            
                             <DropdownItem onClick={e=> setCorBorda(amarelo)}>Amerelo</DropdownItem>                                                                                                                                                                                                                                         
                             <DropdownItem onClick={e=> setCorBorda(verde)}>verde</DropdownItem>                                                                                                                                                                                                                                         
                             <DropdownItem onClick={e=> setCorBorda(vermelho)}>Vermelho</DropdownItem>                                                                                                                                                                                                                                         
                             <DropdownItem onClick={e=> setCorBorda(laranja)}>Laranja</DropdownItem>                                                                                                                                                                                                                                         
                             <DropdownItem onClick={e=> setCorBorda(lilas)}>Lilas</DropdownItem>
                             <DropdownItem divider />                                                                                                                                                                                                                                         
                             <DropdownItem onClick={e => excluir(props.id)}>Remover</DropdownItem>                                                                                                                                                                                                                                         
                         </DropdownMenu>
                     </Dropdown>                                                 
                 </div>
              
                 
             </Resizable>    
  
         </Draggable>
     </div>
 )
}