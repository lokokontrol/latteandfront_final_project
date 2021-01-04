import React from 'react'; 
import PropTypes from 'prop-types';
import Button from 'components/ui/Button';

function BookCreateView({bookTitle, bookImage, imagePreview, categories,  handleSubmit, handleInputChange, handleImageChange, handleOnChangeCategory, error }){
  return (
      <div>
        
        <form className="formLogin" onSubmit = {handleSubmit}>
          <p>Vamos a crear un Libro!</p>
          <label for="bookTitle">Elige un título:</label>
          <input type ="text" id="bookTitle" value={bookTitle} onChange={handleInputChange}/>
          <input type="file" onChange={handleImageChange}/>
          <label for="categoriesSelector">Elige una categoria:</label>
          <select id="categoriesSelector" onChange={handleOnChangeCategory}>
            <option value="TODOS">Todas</option>
            {categories.map((category) => <option value={category.id} key={category.id}> {category.name} </option>)}
          </select>
          <Button type="submit"> Crea Libro</Button>
          {bookImage && (
            <div>
              <img src={imagePreview} />
            </div>
          )}
        </form>
        {error}
        
      </div>
  );
}

export default BookCreateView;

BookCreateView.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookImage: PropTypes.object,
  imagePreview: PropTypes.string,
  categories: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleImageChange: PropTypes.func,
  handleOnChangeCategory: PropTypes.func,
  error: PropTypes.string
};