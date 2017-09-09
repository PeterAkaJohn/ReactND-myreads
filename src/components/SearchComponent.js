import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookList from './BookList';

class SearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      query: '',
    };
    this.onUpdateQuery = this.onUpdateQuery.bind(this);
  }

  onUpdateQuery(event) {
    this.setState({ query: event.target.value });
    if (event.target.value.length > 0) {
      this.searchBooks(event.target.value);
    }
  }

  searchBooks(query) {
    BooksAPI.search(query, 20).then((books) => {
      if (books && books.length > 0) {
        this.setState({ books: this.completeUserBooks(books) });
      }
    });
  }

  completeUserBooks(books) {
    const completeBooks = books.reduce((allBooks, book) => {
      const currentBook = book;
      const existingBook = this.props.userBooks.find(userBook => userBook.id === currentBook.id);
      if (existingBook) {
        currentBook.shelf = existingBook.shelf;
      }
      allBooks.push(book);
      return allBooks;
    }, []);

    return completeBooks;
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.onUpdateQuery}
              value={this.state.query}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.books} refreshBooks={this.props.refreshBooks} />
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  userBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshBooks: PropTypes.func.isRequired,
};

export default SearchComponent;
