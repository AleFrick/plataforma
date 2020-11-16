import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Correcoes from '../pages/Correcoes/Correcoes';


import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />      
      <Route path="/correcoes" exact component={Correcoes} isPrivate />    
    </Switch>
  );
}