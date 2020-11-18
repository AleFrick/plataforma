import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Correcoes from '../pages/Correcoes/Correcoes';
import NavBar from '../components/NavBar'


import Route from './Route';

export default function Routes() {
  return (
    <>
      {/* <NavBar/>   */}
      <Switch>
        <Route path="/" exact component={Login} />      
        <Route path="/correcoes" exact component={Correcoes} isPrivate />    
      </Switch>
    </>
  );
}