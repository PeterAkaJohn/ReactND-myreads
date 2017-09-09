import React from "react";
import homeDecorator from "./hoc/homeDecorator";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

function BookShelves(props) {
  const { currentlyReading, wantToRead, read } = mapBooksObject(
    props.userBooks
  );

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
        <BookShelf
          books={read.books}
          title={"Read"}
          refreshBooks={props.refreshBooks}
        />
      </div>
    </div>
  );
}

function mapBooksObject(books) {
  return {
    currentlyReading: {
      title: "Currently Reading",
      books: books.filter(book => book.shelf === "currentlyReading")
    },
    wantToRead: {
      title: "Want To Read",
      books: books.filter(book => book.shelf === "wantToRead")
    },
    read: {
      title: "Read",
      books: books.filter(book => book.shelf === "read")
    }
  };
}

BookShelves.propTypes = {
  userBooks: PropTypes.array.isRequired,
  refreshBooks: PropTypes.func.isRequired
};

export default homeDecorator(BookShelves);
