import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import Container from './components/Container';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieInfoView from './views/MovieInfoView';
import Navigation from './components/Navigation';

// import Container from './components/Container';

const App = () => (
  <>
    <header>
      <Container>
        <Navigation />
      </Container>
    </header>
    <main>
      <Container>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />;
          <Route path={routes.movieInfo} component={MovieInfoView} />;
          <Route path={routes.movie} component={MoviesView} />;
          <Route component={HomeView} />
        </Switch>
      </Container>
    </main>
  </>
);

export default App;
