import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/categoryFilter';

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const filterBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  return (
    <div>
      <div>
        <CategoryFilter changeFilter={changeFilter} />
      </div>
      <div className="booklist">
        {filterBooks.map((book) => (
          <Book book={book} key={book.id} removeBook={removeBook} />
        ))}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
