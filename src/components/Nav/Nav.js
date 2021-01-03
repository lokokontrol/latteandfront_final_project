import {BOOKS, CATEGORIES,LOGOUT} from "config/router/paths";
import React from "react";
import {NavLink} from "react-router-dom";
import useAuthContext from 'hooks/useAuthContext';

function Nav() {

  const  {isAuthenticated} = useAuthContext();
  if (isAuthenticated){
    return (
      <nav>
        <ul>
          <li>
            <NavLink to={BOOKS} activeClassName="nav-active" >Books</NavLink>
          </li>
          <li>
            <NavLink to={CATEGORIES} activeClassName="nav-active" >Categorias</NavLink>
          </li>
          <li>
            <NavLink to={LOGOUT} activeClassName="nav-active" >Cerrar Sesion</NavLink>
          </li>
  
        </ul>
      </nav>
    );
  } else {
    return null;
  }
}

export default Nav;