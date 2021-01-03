import React,{useState, useEffect} from 'react';
import apiClient from 'utils/apiClient.js';
import BooksView from './BooksView';

function Books() {
  const [books, setBooks] = useState(null);
  useEffect (() => {
    apiClient.get("http://18.130.120.189/api/books").then((data) => setBooks(data));
  }, [setBooks]);

  if (!books) {
    return <div>Todavía no hay books</div>;
  }

  return (
    <BooksView data={books} />
  );
}
export default Books;

