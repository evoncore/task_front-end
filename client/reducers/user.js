import axios from 'axios';
import store from '../store';

function users(state=[], action) {
  switch(action.type) {
    case 'USER_CHECK': {
      axios
        .post('/auth/check')
        .then(res => {
          store.dispatch({type: 'USER_SIGN-IN', payload: res.data});
        })
        .catch(err => console.error(err));

      return false;
    }

    case 'USER_SIGN-IN': {
      return action.payload;
    }

    case 'USER_SIGN-IN_FAILED': {
      return action.payload;
    }

    case 'USER_SEND_SIGN-IN': {
      axios
        .post('/auth/sign-in', {user: action.payload})
        .then(res => {
          if (typeof res.data == 'object') {
            store.dispatch({type: 'USER_SIGN-IN', payload: res.data});
            window.location = '/';
          } else {
            store.dispatch({type: 'USER_SIGN-IN_FAILED', payload: res.data});
          }
        })
        .catch(err => console.error(err));

      return false;
    }

    case 'USER_SEND_SIGN-UP': {
      axios
        .post('/auth/sign-up', {newUser: action.payload})
        .then(res => {
          if (typeof res.data == 'object') {
            store.dispatch({type: 'USER_SIGN-IN', payload: res.data});
            window.location = '/';
          } else {
            store.dispatch({type: 'USER_SIGN-IN_FAILED', payload: res.data});
          }
        })
        .catch(err => console.error(err));

      return false;
    }

    case 'FETCH_PASSWORDS': {
      return {...state, passwords: action.payload};
    }

    case 'SAVE_USER_PASSWORD': {
      axios
        .post('/user/passwords/edit', {passwords: action.payload})
        .then(res => {
          store.dispatch({type: 'FETCH_PASSWORDS', payload: res.data});
        })
        .catch(err => console.error(err));

      return {...state, passwords: action.payload};
    }

    default: {
      return state;
    }
  }
}

export default users;