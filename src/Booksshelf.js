import React from 'react';
import Books from './Books';

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

export default Booksshelf;
