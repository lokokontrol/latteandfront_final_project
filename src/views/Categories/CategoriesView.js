import React from 'react'; 
import {Link} from 'react-router-dom';
import {LOGOUT} from 'config/router/paths';

function CategoriesView(){
  return <div>
      CATEGORIAS
      <Link to={LOGOUT}> Cerrar sesion</Link>
    </div>;
}

export default CategoriesView;