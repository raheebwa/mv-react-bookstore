import React from 'react';
import PropTypes from 'prop-types';
import './filter.scss';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({ changeFilter }) => {
  const select = React.useRef(null);
  return (
    <div className="filter">
      <select
        id="filter-category"
        className="form-input"
        name="category"
        ref={select}
        onChange={() => changeFilter(select.current.value)}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
