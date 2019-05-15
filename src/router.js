import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/Login';
import Question from './routes/Question/Question';
import City from './routes/City';
import Map from './routes/Map/Index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/question" exact component={Question} />*/}
        {/*<Route path="/test" exact component={IndexPage} />*/}
        <Route path="/map" exact component={Map} />
        <Route path="/city" exact component={City} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
