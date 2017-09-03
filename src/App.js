import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import BookShelfList from './components/BookShelfList';
import SearchComponent from './components/SearchComponent';

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={BookShelfList} />
          <Route path='/search' component={SearchComponent} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
