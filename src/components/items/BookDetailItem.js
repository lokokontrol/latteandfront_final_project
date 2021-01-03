import React from 'react';
import { Card } from '../ui/Card';
import PropTypes from 'prop-types';


function BookDetailItem({book}) {

  return (
    <Card>
        <span>{book.title}</span>
        <img src={book.image} />
        {book.categories.map((category) => <p key={category.id}> {category.name} </p>)}
    </Card>
  );
}

export default BookDetailItem;

BookDetailItem.propTypes = {
  book: PropTypes.object,
};