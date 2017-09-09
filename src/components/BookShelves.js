import React, { Component } from "react";
import homeDecorator from "./hoc/homeDecorator";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

class BookShelves extends Component {
  render() {
    const curReading = this.props.userBooks.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantRead = this.props.userBooks.filter(
      book => book.shelf === "wantToRead"
    );
    const read = this.props.userBooks.filter(book => book.shelf === "read");

    return (
      <div className="list-books-content">
        <div>
          <BookShelf
            books={curReading}
            title={"Currently Reading"}
            refreshBooks={this.props.refreshBooks}
          />
          <BookShelf
            books={wantRead}
            title={"Want to Read"}
            refreshBooks={this.props.refreshBooks}
          />
          <BookShelf
            books={read}
            title={"Read"}
            refreshBooks={this.props.refreshBooks}
          />
        </div>
      </div>
    );
  }
}

BookShelves.propTypes = {
  userBooks: PropTypes.array.isRequired,
  refreshBooks: PropTypes.func.isRequired
};

export default homeDecorator(BookShelves);
