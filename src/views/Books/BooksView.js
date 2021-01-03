import React from 'react';
import PropTypes from 'prop-types';
import BookItem from 'components/items/BookItem';



import "./styles.css";

function BooksView({books, categories, handleOnChangeCategory}){


  function generateBookItem(book) {
    return (
      <BookItem book={book} />
    );
  }

  return (
    <div>
      <select id="categoriesSelector" onChange={handleOnChangeCategory}>
        <option value="TODOS">Todas</option>
        {categories.map((category) => <option value={category.id} key={category.id}> {category.name} </option>)}
      </select>
      <ul>
        {books.map((book) => <li key={book.id}> {generateBookItem(book)} </li>)}
      </ul>
    </div>
  );
}

export default BooksView;

BooksView.propTypes = {
  books: PropTypes.array,
  categories: PropTypes.array,
  handleOnChangeCategory: PropTypes.func
};