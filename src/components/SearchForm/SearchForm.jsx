import React from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';

const SearchForm = ({formValue, onInputHandler}) => {
  return (
    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={onInputHandler}
      value={formValue}
    />
  );
}

export default SearchForm;

SearchForm.propTypes = {
  formValue: PropTypes.string.isRequired,
  onInputHandler: PropTypes.func.isRequired,
}