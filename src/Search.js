import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from './BooksAPI';
import Books from './Books';

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  searchBook = (book) => {
    this.setState({ query: book })
    if (this.state.query) {
      BookAPI.search(this.state.query).then(books => {
        this.setState({ books })
      })
    }
  }

  render() {
    let { books } = this.state;
    let { onMove } = this.props;
    return (
      (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/" />
            <div className="search-books-input-wrapper">
              {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
              <input onChange={(e) => this.searchBook(e.target.value)} type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              { books
              .map(book => (
                <Books 
                data={book}
                key={book.id}
                onMove={onMove}
                />
              ))}
            </ol>
          </div>
        </div>
      )
    )
  }
}


export default Search;