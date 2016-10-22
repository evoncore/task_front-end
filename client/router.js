import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import App from './components/App';
import Home from './components/Home';

// Guest Components
import GuestApp from './guest-components/App';
import SignIn from './guest-components/SignIn';
import SignUp from './guest-components/SignUp';

// Errors Components
import HTTP_404 from './errors-components/404'

export const userRouter = (
  <Provider store={store}>
    <Router history={history}>

      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="*" component={HTTP_404} />
      </Route>

    </Router>
  </Provider>
);

export const guestRouter = (
  <Provider store={store}>
    <Router history={history}>

      <Route component={GuestApp}>
        <Redirect from="/" to="/sign-in" />
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="*" component={HTTP_404} />
      </Route>

    </Router>
  </Provider>
);