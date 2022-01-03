import React, { Component } from "react";
import "./Searchbar.scss";
import SearchForm from "../SearchForm/SearchForm";
import "material-design-icons/iconfont/material-icons.css";
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: "",
  };

  onInputHandler = ({ target }) => {
    this.setState({ query: target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="material-icons">search</span>
          </button>
          <SearchForm formValue={this.state.query} onInputHandler={this.onInputHandler} />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}