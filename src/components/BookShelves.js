import React from 'react';
import PropTypes from 'prop-types';
import homeDecorator from './hoc/homeDecorator';
import BookShelf from './BookShelf';

function mapBooksObject(books) {
  return {
    currentlyReading: {
      title: 'Currently Reading',
      books: books.filter(book => book.shelf === 'currentlyReading'),
    },
    wantToRead: {
      title: 'Want To Read',
      books: books.filter(book => book.shelf === 'wantToRead'),
    },
    read: {
      title: 'Read',
      books: books.filter(book => book.shelf === 'read'),
    },
  };
}

function BookShelves(props) {
  const { currentlyReading, wantToRead, read } = mapBooksObject(props.userBooks);

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          books={currentlyReading.books}
          title={currentlyReading.title}
          refreshBooks={props.refreshBooks}
        />
        <BookShelf
          books={wantToRead.books}
          title={wantToRead.title}
          refreshBooks={props.refreshBooks}
        />
        <BookShelf books={read.books} title={'Read'} refreshBooks={props.refreshBooks} />
      </div>
    </div>
  );
}

BookShelves.propTypes = {
  userBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshBooks: PropTypes.func.isRequired,
};

export default homeDecorator(BookShelves);
