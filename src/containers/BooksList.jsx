import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book book={book} key={book.id} removeBook={removeBook} />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
