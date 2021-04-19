import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import AppHeader from './components/AppHeader';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieInfoView from './views/MovieInfoView';

const App = () => (
  <>
    <AppHeader />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />;
      <Route path={routes.movieInfo} component={MovieInfoView} />;
      <Route path={routes.movie} component={MoviesView} />;
      <Route component={HomeView} />
    </Switch>
  </>
);

export default App;
