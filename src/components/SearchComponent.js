import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookList from "./BookList";

class SearchComponent extends Component {
  state = {
    books: [],
    query: ""
  };

  onUpdateQuery = event => {
    this.setState({ query: event.target.value });
    if (event.target.value.length > 0) {
      this.searchBooks(event.target.value);
    }
  };

  searchBooks = query => {
    BooksAPI.search(query, 20).then(books => {
      if (books && books.length > 0) {
        this.setState({ books: this.completeUserBooks(books) });
      }
    });
  };

  completeUserBooks = books => {
    const completeBooks = books.reduce((completeBooks, book) => {
      let existingBook = this.props.userBooks.find(userBook => {
        return userBook.id === book.id;
      });
      if (existingBook) {
        book.shelf = existingBook.shelf;
      }
      completeBooks.push(book);
      return completeBooks;
    }, []);

    return completeBooks;
  };

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
          <BookList
            books={this.state.books}
            refreshBooks={this.props.refreshBooks}
          />
        </div>
      </div>
    );
  }
}

export default SearchComponent;
