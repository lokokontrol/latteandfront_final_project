import React,{useState, useEffect} from 'react';
import apiClient from 'utils/apiClient.js';
import BooksView from './BooksView';
import {BACKEND} from 'consts/backend';
import {BOOKS} from 'config/router/paths';


function Books() {
  const [books, setBooks] = useState(null);
  useEffect (() => {
    apiClient.get(BACKEND+BOOKS).then((data) => setBooks(data));
  }, [setBooks]);

  if (!books) {
    return <div>Todavía no hay books</div>;
  }


  return (
    <BooksView data={books} />
  );
}
export default Books;

