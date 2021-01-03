import React from 'react';
import { Card } from '../ui/Card';
import PropTypes from 'prop-types';
import { useHistory,generatePath } from "react-router-dom";
import {BOOK_DETAIL} from 'config/router/paths';


function BookItem({book}) {

  const history = useHistory();

  function handleClick(){
    history.push(generatePath(BOOK_DETAIL, { id: book.id }));
  }

  return (
    <Card onClick={handleClick}>
        <span>{book.title}</span>
        <img src={book.image} />
        {book.categories.map((category) => <p key={category.id}> {category.name} </p>)}
    </Card>
  );
}

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.object,
};
