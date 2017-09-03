import React, { Component } from "react";
import PropTypes from "prop-types";
import homeDecorator from "./hoc/homeDecorator";
import BookShelf from "./BookShelf";

class BookShelfList extends Component {
  state = {
    books: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="list-books-content">
        <div>
          <BookShelf title={"Currently Reading"} />
          <BookShelf title={"Want to Read"} />
          <BookShelf title={"Read"} />
        </div>
      </div>
    );
  }
}

export default homeDecorator(BookShelfList);
