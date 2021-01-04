import React from 'react';
import { Card } from '../ui/Card';
import PropTypes from 'prop-types';
import { useHistory,generatePath } from "react-router-dom";
import {BOOKS,BOOK_DETAIL} from 'config/router/paths';
import Button from 'components/ui/Button';
import apiClient from 'utils/apiClient.js';
import {BACKEND} from 'consts/backend';


function BookItem({book}) {

  const history = useHistory();

  function handleClick(){
    history.push(generatePath(BOOK_DETAIL, { id: book.id }));
  }


  function handleEliminarButtonClick(){
    apiClient.delete(generatePath(BACKEND+BOOK_DETAIL, { id: book.id }));
    history.push(BOOKS);
  }

  return (
    <Card>
        <span>{book.title}</span>
        <img src={book.image} onClick={handleClick}/>
        {book.categories.map((category) => <p key={category.id}> {category.name} </p>)}
        <Button>Editar</Button>
        <Button onClick={handleEliminarButtonClick}>Eliminar</Button>
    </Card>
  );
}

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.object,
};
