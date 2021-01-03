import React,{useState, useEffect} from 'react';
import BookDetailView from './BookDetailView';
import {useParams, generatePath} from 'react-router-dom';
import apiClient from 'utils/apiClient.js';
import {BACKEND} from 'consts/backend';
import {BOOK_DETAIL} from 'config/router/paths';

function BookDetail(){
  const [bookDetail, setBookDetail] = useState(null);
  const { id } = useParams();

  useEffect (() => {
    apiClient.get(BACKEND+generatePath(BOOK_DETAIL, { id: id })).then((data) => setBookDetail(data));
  }, [id, setBookDetail]);

  if (!bookDetail) {
    return <div>Todavía no está disponible el detalle del libro</div>;
  }

  return (
    <BookDetailView book={bookDetail}/>
  );
}

export default BookDetail;
