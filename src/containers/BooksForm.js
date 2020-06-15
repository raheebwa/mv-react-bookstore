import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

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

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <h2>Title</h2>
        <input name="title" type="text" value={title} onChange={this.handleChange} />
        <h2>Category</h2>
        <select name="category" value={category} onChange={this.handleChange}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => {
      dispatch(createBook(book));
    };
  };
};

export default BooksForm;
