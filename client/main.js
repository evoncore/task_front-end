import { render } from 'react-dom';
import axios from 'axios';

// Styles
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import css from '../public/stylus/main.styl';

// Router
import { userRouter, guestRouter } from './router';

axios
  .post('/auth/check')
  .then(res => {
    if (res.data) {
      render(userRouter, document.querySelector('#root'));
    } else {
      render(guestRouter, document.querySelector('#root'));
    }
  })
  .catch(err => console.error(err));