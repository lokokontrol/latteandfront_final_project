import React from 'react';
import {Redirect, Route} from 'react-router-dom';
//import useAuthContext from 'hooks/useAuthContext';
import {HOME} from 'config/router/paths';
import useAuthContext from 'hooks/useAuthContext';


const PrivateRoute = (props) => {
  const  {isAuthenticated} = useAuthContext();

  if(!isAuthenticated){
    return <Redirect to={HOME} />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;