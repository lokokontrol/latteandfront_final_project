import React from 'react'; 
import PropTypes from 'prop-types';
import Button from 'components/ui/Button';

function BookCreateView({bookTitle, bookImage, imagePreview, categories,  handleSubmit, handleInputChange, handleImageChange, handleOnChangeCategory, error }){
  return (
      <div>
        <form onSubmit = {handleSubmit}>
          <input type ="text" value={bookTitle} onChange={handleInputChange}/>
          <input type="file" onChange={handleImageChange}/>
          
          <select id="categoriesSelector" onChange={handleOnChangeCategory}>
            <option value="TODOS">Todas</option>
            {categories.map((category) => <option value={category.id} key={category.id}> {category.name} </option>)}
          </select>
          <Button type="submit"> Crea Libro</Button>
        </form>
        {error}
        {bookImage && (
            <div>
              <img src={imagePreview} />
            </div>
          )}
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