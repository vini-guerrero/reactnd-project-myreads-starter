import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Search from './Search';
import Booksshelf from './Booksshelf';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  filterShelf = (param) => {
    return (this.state.books.filter(
      books => books.shelf === param))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search />
        )
        } />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Booksshelf
                  books={this.filterShelf('currentlyReading')}
                  title='Current Reading'
                />
                <Booksshelf
                  books={this.filterShelf('wantToRead')}
                  title='Want to Read'
                />
                <Booksshelf
                  books={this.filterShelf('read')}
                  title='Read'
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" />
            </div>
          </div>
        )} />

      </div>
    )
  }
}

export default BooksApp
