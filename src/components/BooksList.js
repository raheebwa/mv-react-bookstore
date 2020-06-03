import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { connect } from 'react-redux';

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
          {books.map(book => (
            <Book book={book} key={book.id}/>
          ))}
        </td>
      </tr>
    </tbody>
  </table>
);

BooksList.propTypes = {
  book: PropTypes.instanceOf(Array).isRequired
};

const mapStateToProps = (state) => ({ books: state.books })

export default connect(mapStateToProps)(BooksList);
