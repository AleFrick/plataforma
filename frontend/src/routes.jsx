import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Correcao from './pages/Correcoes/Correcoes'
import Teste from './pages/Teste/Teste'
import Login from './pages/Login/Login'


export default function Routes(){
    const [isLogged, setLogged] = useState(false)

    function OTeste(value){
        let expirarem = new Date().getTime() + (60000 * 5)
        sessionStorage.setItem('@nome-do-app/isLogged',JSON.stringify({
            "value": value,
            "expires": expirarem
        }))
        setLogged(sessionStorage.getItem('@nome-do-app/isLogged') )
        if(value){
            
            window.location.href = '/'
        }      
       
    }

    useEffect(() =>{        
        setLogged(sessionStorage.getItem('@nome-do-app/isLogged') )
    }, [])
    return(
        
          <BrowserRouter>
                <Switch>
                    <Route path="/" render={(props) => <Correcao isLogged={isLogged} />}  exact={true} />    
                    <Route path="/teste" component={Teste}  />    
                    <Route path="/login" render={(props) => <Login setLogged={ e => OTeste(e.target.value)} /> }  />    
                </Switch>
            </BrowserRouter>  
        
    )
}