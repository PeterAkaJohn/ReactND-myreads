import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

export default function withBooks(Component) {
  function WithBooks(props) {
    if (props.userBooks.length > 0 || props.books.length > 0) {
      return <Component {...props} />;
    }
    return <Spinner />;
  }
  WithBooks.defaultProps = {
    userBooks: [],
    books: [],
  };
  WithBooks.propTypes = {
    userBooks: PropTypes.arrayOf(PropTypes.object),
    books: PropTypes.arrayOf(PropTypes.object),
  };
  return WithBooks;
}
