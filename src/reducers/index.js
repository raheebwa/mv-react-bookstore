import { combineReducers } from 'redux';
import booksReducers from './books';
import filterReducers from './filter';

const rootReducer = combineReducers({
  books: booksReducers,
  filter: filterReducers,
});

export default rootReducer;
