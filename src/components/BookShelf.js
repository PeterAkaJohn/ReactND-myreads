import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <BookList books={props.books} refreshBooks={props.refreshBooks} />
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshBooks: PropTypes.func.isRequired,
};

export default BookShelf;
