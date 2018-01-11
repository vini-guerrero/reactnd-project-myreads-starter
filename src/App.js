import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Search from './Search';
import Booksshelf from './Booksshelf';

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search/>
        )
        }/>
        <Route exact path="/" render={() => (
          <Booksshelf/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
