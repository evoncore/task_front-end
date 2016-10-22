import axios from 'axios';

// GET ALL
export function fetchPasswords() {
  var request = axios.post('/user/passwords');

  return (dispatch) => {
    request
      .then(({data}) => {
        dispatch({ type: 'FETCH_PASSWORDS', payload: data });
      })
      .catch((err) => {
        console.error('SERVER_FETCH_PASSWORDS', err);
      });
  };
}