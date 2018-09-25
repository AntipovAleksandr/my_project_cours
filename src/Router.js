import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import InPage from './components/SiglInPage';
import UpPage from './components/SiglUpPage';
import LearnMore from './components/LearnMore';
import Users from './components/Users';
import User from './components/User';
import Posts from './components/Posts';
import Todos from './components/Todos';
import NoMatch from './components/NoMatch404';


export default () => (
    <Router>
      <App>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/sign_in" component={InPage}/>
              <Route path="/sign_up" component={UpPage}/>
              <Route path="/learn_more" component={LearnMore}/>
              <Route exact path="/users" component={Users}/>
              <Route exact path="/users/:id" component={User}/>
              <Route path="/users/:id/posts" component={Posts}/>
              <Route path="/users/:id/todos" component={Todos}/>
              <Route component={NoMatch}/>
          </Switch>
      </App>
    </Router>
);