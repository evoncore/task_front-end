import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import ROOT reducer
import rootReducer from './reducers/index';

const middleware = applyMiddleware(thunk);

const defaultState = {
  user: false,
};

const store = createStore(rootReducer, defaultState, middleware);
store.dispatch({type: 'USER_CHECK'});

export const history = syncHistoryWithStore(browserHistory, store);
export default store;