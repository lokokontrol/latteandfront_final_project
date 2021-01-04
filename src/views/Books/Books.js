import React,{useState, useEffect, useMemo} from 'react';
import apiClient from 'utils/apiClient.js';
import BooksView from './BooksView';
import {BACKEND} from 'consts/backend';
import {BOOKS,CATEGORIES} from 'config/router/paths';


function Books() {
  const [books, setBooks] = useState(null);
  const [categories, setCategories] = useState(null);
  const [currentCategoryId, setCurrentCategoryId] = useState(-1);


  const booksToShow = useMemo(
    function() {
      if (!books) {
        return null;
      }
      if (currentCategoryId > -1) {
        return books.filter((book) => {
          return book.categories.some((cat) => cat.id === parseInt(currentCategoryId));
        });
      } else {
        return books;
      }
    },
    [books, currentCategoryId]
  );

  useEffect (() => {
    apiClient.get(BACKEND+BOOKS).then((data) => setBooks(data));
  }, [setBooks]);

  useEffect (() => {
     apiClient.get(BACKEND+CATEGORIES).then((data) => setCategories(data));
  }, [setCategories]);


  if (!books) {
    return <div>Todavía no hay books</div>;
  }
  if (!categories) {
    return <div>Todavía no hay categorias</div>;
  }


  function handleOnChangeCategory(event) {
    setCurrentCategoryId(event.target.value);
  };



  return (
    <BooksView books={booksToShow}  categories={categories} handleOnChangeCategory={handleOnChangeCategory} />
  );
}
export default Books;

