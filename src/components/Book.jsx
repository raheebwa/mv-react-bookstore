import React from 'react';
import PropTypes from 'prop-types';
import './book.scss';

const Book = ({ book, removeBook }) => (
  <div class="book">
    <div class="book-details">
        <h3>ISBN#{book.id}</h3>
        <h2>{book.title}</h2>
        <div class="book-author">Some Author</div>
        <div class="book-actions">
          <button type="button">Comment</button>
          <button type="submit" onClick={() => removeBook(book)}>
          delete
        </button>
          <button type="button">Edit</button></div>
    </div>
    <div class="book-progress">
        <div class="ring"></div>
        <div class="progress-ring">
          <div>{book.id}%</div>
          <div>Completed</div>
        </div>
    </div>
    <div class="book-current-state">
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
