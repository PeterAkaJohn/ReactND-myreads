import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <Book key={book.id} book={book} refreshBooks={props.refreshBooks} />
        ))}
      </ol>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshBooks: PropTypes.func.isRequired,
};

export default BookList;
