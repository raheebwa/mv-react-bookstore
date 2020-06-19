import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import '../assets/css/books.scss';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100),
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.name === 'category') {
      this.setState({
        category: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    const { title } = this.state;
    const { createBook } = this.props;
    event.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: Math.ceil(Math.random() * 100),
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-container">
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            placeholder="Add a Title"
            className="form-input"
            id="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
          <select
            name="category"
            id="category"
            className="form-input"
            value={category}
            onChange={this.handleChange}
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
