import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Search from './Search';
import Booksshelf from './Booksshelf';
import sortBy from 'sort-by';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books : books.sort(sortBy('title')) })
    })
  }

  updateShelf = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
          
        }))
      })
    }
  }

  filterShelf = (param) => {
    return (this.state.books.filter(
      books => books.shelf === param))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search onMove={this.updateShelf}/>
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
                  onMove={this.updateShelf}
                />
                <Booksshelf
                  books={this.filterShelf('wantToRead')}
                  title='Want to Read'
                  onMove={this.updateShelf}
                />
                <Booksshelf
                  books={this.filterShelf('read')}
                  title='Read'
                  onMove={this.updateShelf}
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
