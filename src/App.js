import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Container from './components/Container';

import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieInfo from './views/MovieInfo';
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
      <Route exact path="/movies" component={MoviesView} />;
      <Route path="/movies/:movieId" component={MovieInfo} />;
      <Route component={NotFoundView} />
    </Switch>
  </Container>
);

export default App;
