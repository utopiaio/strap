import React, { Suspense, lazy, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));


const App = () => (
  <Router>
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={props => <Home {...props} />} />
          <Route path="/about" component={props => <About {...props} />} />
        </Switch>
      </Suspense>
    </Fragment>
  </Router>
);


export default <App />;
