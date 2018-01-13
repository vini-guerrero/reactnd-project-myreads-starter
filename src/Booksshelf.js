import React from 'react';
import Books from './Books';
import PropTypes from 'prop-types';

const Booksshelf = (props) => {
    let { books, title, onMove } = props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length < 1 && (
              <h4> (Empty Shelf)</h4>
            )}

            {books.map((book) => (
              <Books data={book} key={book.id} onMove={onMove} />
            ))}
          </ol>
        </div>
      </div>
    )
  }

Booksshelf.PropTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired
}
export default Booksshelf;
