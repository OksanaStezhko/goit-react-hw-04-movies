import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink
          exact
          to="/"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/movies"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
