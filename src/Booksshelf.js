import React, { Component } from 'react';
import Books from './Books';

class Booksshelf extends Component {
  render() {
    let { books, title, onMove} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book, index) => (
            <Books data={book} key={book.id} onMove={onMove}/>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Booksshelf;
