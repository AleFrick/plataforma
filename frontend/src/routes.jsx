import React, { useState } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Correcao from './pages/Correcoes/Correcoes'
import Teste from './pages/Teste/Teste'
import Login from './pages/Login/Login'


export default function Routes(){
    const [isLogged, setLogged] = useState(false)


    return(
        
          <BrowserRouter>
                <Switch>
                    <Route path="/" component={isLogged === true && Correcao || isLogged === false && Login} exact={true} />    
                    <Route path="/teste" component={Teste}  />    
                    <Route path="/login" render={(props) => <Login /> }  />    
                </Switch>
            </BrowserRouter>  
        
    )
}