import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Correcao from './pages/Correcoes/Correcoes'


export default function Routes(){
    return(
        
          <BrowserRouter>
                <Switch>
                    <Route path="/" component={Correcao} exact={true} />    
                </Switch>
            </BrowserRouter>  
        
    )
}