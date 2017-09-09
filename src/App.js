import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import BookShelves from './components/BookShelves';
import SearchComponent from './components/SearchComponent';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      userBooks: [],
    };

    this.refreshBooks = this.refreshBooks.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll().then((userBooks) => {
      this.setState({ userBooks });
    });
  }

  refreshBooks() {
    this.getAllBooks();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <BookShelves userBooks={this.state.userBooks} refreshBooks={this.refreshBooks} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchComponent userBooks={this.state.userBooks} refreshBooks={this.refreshBooks} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
