import React from 'react'; 
import PropTypes from 'prop-types';
import Button from 'components/ui/Button';

function BookCreateView({bookTitle, bookImage, imagePreview, handleSubmit, handleInputChange, handleImageChange, error }){
  return (
      <div>
        <form onSubmit = {handleSubmit}>
          <input type ="text" value={bookTitle} onChange={handleInputChange}/>
          <input type="file" onChange={handleImageChange}/>
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
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleImageChange: PropTypes.func,
  error: PropTypes.string
};