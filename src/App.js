import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import AppHeader from './components/AppHeader';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const MovieInfoView = lazy(() =>
  import('./views/MovieInfoView' /* webpackChunkName: "movies-info-view" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "movies-view" */),
);

const App = () => (
  <>
    <Suspense fallback={<h1>загружаем...</h1>}>
      <AppHeader />
      <Switch>
        <Route exact path={routes.home} component={HomeView} />;
        <Route path={routes.movieInfo} component={MovieInfoView} />;
        <Route path={routes.movie} component={MoviesView} />;
        <Route component={HomeView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
