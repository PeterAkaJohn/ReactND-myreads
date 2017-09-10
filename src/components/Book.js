import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {
  constructor() {
    super();
    this.updateBook = this.updateBook.bind(this);
  }
  updateBook(event) {
    event.preventDefault();
    this.props.book.shelf = event.target.value;
    BooksAPI.update(this.props.book, event.target.value).then(() => {
      this.props.refreshBooks();
    });
  }
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.updateBook} value={this.props.book.shelf || 'none'}>
                <option value="disabled" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors &&
              this.props.book.authors.map(author => <span key={author}>{author}</span>)}
          </div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.object,
  }).isRequired,
  refreshBooks: PropTypes.func.isRequired,
};

export default Book;
