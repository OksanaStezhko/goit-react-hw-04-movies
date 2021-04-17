import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { query } = this.state;
    if (!query) return;

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={this.query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
