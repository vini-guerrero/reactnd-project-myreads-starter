import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from './BooksAPI';
import Books from './Books';
import { Debounce } from 'react-throttle';

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  searchBook = (book) => {
    this.setState({ query: book })
    if (this.state.query) {
      BookAPI.search(this.state.query).then(books => {
        if (!books.error) {
          books.map( book => (
            this.props.books.filter(b => b.id === book.id).map(b => book.shelf = b.shelf)
          ) )
          this.setState({ books })
        } else {
          this.setState({ books: [] })
        }
      }).catch(() => (
        console.log(`Ocorreu um erro ao pesquisar!`)
      ))
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
              <Debounce time="400" handler="onChange">
                <input onChange={(e) => this.searchBook(e.target.value)} type="text" placeholder="Search by title or author" />
              </Debounce>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {books.length < 1 && (
                <p>
                  No data to display
                </p>
              )}

              {books.map(book => (
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