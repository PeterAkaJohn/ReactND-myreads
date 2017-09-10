import React from 'react';
import PropTypes from 'prop-types';
import homeDecorator from './hoc/homeDecorator';
import withBooks from './hoc/withBooks';
import BookShelf from './BookShelf';

function mapBooksObjectToArray(books) {
  return [
    {
      title: 'Currently Reading',
      books: books.filter(book => book.shelf === 'currentlyReading'),
    },

    {
      title: 'Want To Read',
      books: books.filter(book => book.shelf === 'wantToRead'),
    },

    {
      title: 'Read',
      books: books.filter(book => book.shelf === 'read'),
    },
  ];
}

function BookShelves(props) {
  const shelves = mapBooksObjectToArray(props.userBooks);

  return (
    <div className="list-books-content">
      <div>
        {shelves.map(shelf => (
          <BookShelf
            key={shelf.title}
            books={shelf.books}
            title={shelf.title}
            refreshBooks={props.refreshBooks}
          />
        ))}
      </div>
    </div>
  );
}

BookShelves.propTypes = {
  userBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshBooks: PropTypes.func.isRequired,
};

export default withBooks(homeDecorator(BookShelves));
