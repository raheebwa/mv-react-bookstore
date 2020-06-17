import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../wrapper.scss';
import './app.scss';

const App = () => (
  <div className="App">
    <div className="panel-bg">
      <h1 className="brand">Bookstore CMS</h1>
      <nav className="nav">
        <div className="nav-link">BOOKS</div>
        <div className="nav-link">CATEGORIES</div>
      </nav>
    </div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
