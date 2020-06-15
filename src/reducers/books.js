import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { books: state.books.filter(book => book.id !== parseInt(action.book.id, 2)) };
    default:
      return state;
  }
};

export default bookReducer;
