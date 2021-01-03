import React from 'react'; 
import PropTypes from 'prop-types';
import BookItem from 'components/items/BookItem';



import "./styles.css";

function BooksView({data}){
  

  function generateBookItem(book) {
    return (
      <BookItem book={book} />
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