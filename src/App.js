import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Container from './components/Container';

import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';
// import Container from './components/Container';

const App = () => (
  <Container>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="navlink"
          activeClassName="navlink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="navlink"
          activeClassName="navlink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />;
      <Route path="/movies" component={MoviesView} />;
      <Route component={NotFoundView} />
    </Switch>
  </Container>
);

export default App;
