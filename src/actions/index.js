const CREATE__BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => ({
  type: CREATE__BOOK,
  book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export {
  CREATE__BOOK, REMOVE_BOOK, createBook, removeBook,
};
