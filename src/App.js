import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import BookShelves from "./components/BookShelves";
import SearchComponent from "./components/SearchComponent";
import * as BooksAPI from "./BooksAPI.js";

class BooksApp extends React.Component {
  state = {
    userBooks: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(userBooks => {
      this.setState({ userBooks });
    });
  };

  refreshBooks = () => {
    this.getAllBooks();
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <BookShelves
                userBooks={this.state.userBooks}
                refreshBooks={this.refreshBooks}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchComponent
                userBooks={this.state.userBooks}
                refreshBooks={this.refreshBooks}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
