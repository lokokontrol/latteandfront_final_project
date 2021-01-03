import {BOOKS, BOOK_CREATE ,LOGOUT} from "config/router/paths";
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
            <NavLink to={BOOK_CREATE} activeClassName="nav-active" >Create Book</NavLink>
          </li>
          <li>
            <NavLink to={LOGOUT} activeClassName="nav-active" >Logout</NavLink>
          </li>
  
        </ul>
      </nav>
    );
  } else {
    return null;
  }
}

export default Nav;