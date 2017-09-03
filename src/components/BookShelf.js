import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <BookList />
    </div>
  );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookShelf;
