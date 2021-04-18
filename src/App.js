import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import routes from './routes';

import Container from './components/Container';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieInfo from './views/MovieInfo';

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
      <Route exact path={routes.home} component={HomeView} />;
      <Route path={routes.movieInfo} component={MovieInfo} />;
      <Route path={routes.movie} component={MoviesView} />;
      <Route component={HomeView} />
    </Switch>
  </Container>
);

export default App;
