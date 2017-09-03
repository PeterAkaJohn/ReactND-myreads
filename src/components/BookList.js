import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BookList(props) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
        <Book />
      </ol>
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
