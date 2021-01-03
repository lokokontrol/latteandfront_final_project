import React from 'react'; 
import PropTypes from 'prop-types';



import "./styles.css";

function BooksView({data}){
  

  function generateBookItem(book) {
    return (
      <div class ="grid">
          <span>{book.title}</span>
          <img className="photo" src={book.image} />
          
          {book.categories.map((category) => <li key={category.id}> {category.name} </li>)}
      </div>
  
    );
  }

  return (

    <ul>
       {data.map((book) => <li key={book.id}> {generateBookItem(book)} </li>)}
    </ul>

  );
}

export default BooksView;

BooksView.propTypes = {
  data: PropTypes.object,
};