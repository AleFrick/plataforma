import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import '../js/aux_token.js'
import { IsLogged } from '../js/aux_token.js';

function RouteWrapper({
  redirectTo, isPrivate, component: Component, ...rest
}) {
  //const authenticated = localStorage.getItem('@SuaAplicacao:JWT_TOKEN');
    
  //if (!authenticated && isPrivate) return <Redirect to={redirectTo} />; 

  const authenticated = IsLogged();
  if (authenticated && isPrivate) return <Redirect to={redirectTo} />; 

  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: '/',
  isPrivate: false,
};

export default RouteWrapper;