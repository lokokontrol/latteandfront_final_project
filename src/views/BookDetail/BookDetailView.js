import React from 'react';
import BookDetailItem from 'components/items/BookDetailItem';
import PropTypes from 'prop-types';

function BookDetailView({book}){
  return (
    <BookDetailItem book={book} />
  );
}

export default BookDetailView;

BookDetailView.propTypes = {
  book: PropTypes.object,
};
