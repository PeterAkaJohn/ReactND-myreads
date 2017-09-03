import React, { Component } from "react";
import homeDecorator from "./hoc/homeDecorator";
import BookShelf from "./BookShelf";
import * as BooksAPI from "../BooksAPI.js";

class BookShelfList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(response => {
      console.log(response);
      this.setState({ books: response });
    });
  }

  render() {
    const curReading = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantRead = this.state.books.filter(
      book => book.shelf === "wantToRead"
    );
    const read = this.state.books.filter(book => book.shelf === "read");

    return (
      <div className="list-books-content">
        <div>
          <BookShelf books={curReading} title={"Currently Reading"} />
          <BookShelf books={wantRead} title={"Want to Read"} />
          <BookShelf books={read} title={"Read"} />
        </div>
      </div>
    );
  }
}

export default homeDecorator(BookShelfList);
