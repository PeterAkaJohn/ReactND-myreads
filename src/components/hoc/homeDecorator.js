import React from "react";

import {Link} from 'react-router-dom';

export default function homeDecorator(Component) {
  function HomeDecorator(props) {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Component {...props} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    );
  }
  return HomeDecorator;
}
