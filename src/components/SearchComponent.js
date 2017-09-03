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
    BooksAPI.search(event.target.value, 20).then(books => {
      this.setState({ books });
      console.log(books);
    });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              onChange={this.onUpdateQuery}
              value={this.state.query}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default SearchComponent;
