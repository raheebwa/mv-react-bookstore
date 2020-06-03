import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </td>
      </tr>
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
