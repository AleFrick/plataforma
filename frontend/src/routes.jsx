import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Correcao from './pages/Correcoes/Correcoes'
import Teste from './pages/Teste/Teste'


export default function Routes(){
    return(
        
          <BrowserRouter>
                <Switch>
                    <Route path="/" component={Correcao} exact={true} />    
                    <Route path="/teste" component={Teste}  />    
                </Switch>
            </BrowserRouter>  
        
    )
}