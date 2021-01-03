import { BrowserRouter,Switch} from "react-router-dom";
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
import './App.css';
import { HOME, BOOKS, BOOK_DETAIL, BOOK_DELETE, BOOK_UPDATE, CATEGORIES,CATEGORY_DETAIL, CATEGORY_DELETE, CATEGORY_UPDATE, LOGOUT } from "config/router/paths";
import Home from 'views/Home/Home';
import Books from 'views/Books/Books';
import BookDetail from 'views/BookDetail/BookDetail';
import BookDelete from 'views/BookDelete/BookDelete';
import BookUpdate from 'views/BookUpdate/BookUpdate';
import Categories from 'views/Categories/Categories';
import CategoryDetail from 'views/CategoryDetail/CategoryDetail';
import CategoryDelete from 'views/CategoryDelete/CategoryDelete';
import CategoryUpdate from 'views/CategoryUpdate/CategoryUpdate';
import AuthContextProvider from 'contexts/authContext';
import Logout from "views/Logout/Logout";
import Nav from './components/Nav/Nav';
  
function App() {

  return (
  
    <AuthContextProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <PrivateRoute path={BOOKS} component={Books} exact/>
          <PrivateRoute path={BOOK_DETAIL} component={BookDetail} exact/>
          <PrivateRoute path={BOOK_DELETE} component={BookDelete} exact />
          <PrivateRoute path={BOOK_UPDATE} component={BookUpdate} exact/>
          <PrivateRoute path={CATEGORIES} component={Categories} exact/>
          <PrivateRoute path={CATEGORY_DETAIL} component={CategoryDetail} exact/>
          <PrivateRoute path={CATEGORY_DELETE} component={CategoryDelete} exact/>
          <PrivateRoute path={CATEGORY_UPDATE} component={CategoryUpdate} exact/>
          <PrivateRoute path={LOGOUT} component={Logout} exact/>
          <PublicRoute path={HOME} component={Home} exact/>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
   

  ); 
}

export default App;
