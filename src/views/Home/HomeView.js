import React from 'react'; 
import PropTypes from 'prop-types';
import Button from 'components/ui/Button';
import {ThemeProvider} from 'styled-components';


const theme = {
  main: "mediumseagreen"
};

function HomeView({palabraIntroducida, handleSubmit, handleInputChange, error}){
    return (
        <div>
          
          <form className="formLogin" onSubmit = {handleSubmit}>
            <span>{error}</span>
            <input type ="text" value={palabraIntroducida} onChange={handleInputChange} />
            <ThemeProvider theme={theme}>
            <Button type="submit"> Iniciar sesion</Button>
            </ThemeProvider>
            
          </form>
        </div>
    );
}

HomeView.propTypes = {
  palabraIntroducida: PropTypes.string,
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default HomeView;