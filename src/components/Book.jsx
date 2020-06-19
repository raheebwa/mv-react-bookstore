import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/book.scss';

const Book = ({ book, removeBook }) => (
  <div className="book">
    <div className="book-details">
      <h3>
        ISBN#
        {book.id}
      </h3>
      <h2>{book.title}</h2>
      <div className="book-author">Some Author</div>
      <div className="book-actions">
        <button type="button">Comment</button>
        <button type="submit" onClick={() => removeBook(book)}>
          delete
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <div className="ring" />
      <div className="progress-ring">
        <div>
          {book.id}
          %
        </div>
        <div>Completed</div>
      </div>
    </div>
    <div className="book-current-state">
      <h3>category</h3>
      <div>{book.category}</div>
      <button type="button">Update Length Read</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
