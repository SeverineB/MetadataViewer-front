/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';

import {
  LOGIN,
  LOGOUT,
  CHECK_IF_LOGGED,
  saveUser,
  userConnected,
  userDisconnected,
} from '../actions';

const serverURL = 'http://localhost:3001/api/users';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;
      axios.post(`${serverURL}/login`, {
        email,
        password,
      },
      {
        withCredentials: true,
      })
        .then((response) => {
          console.log('RESPONSE DATA dans login', response.data);
          const saveCurrentUser = saveUser({ ...response.data });
          localStorage.setItem('username', response.data.session.username);
          store.dispatch(saveCurrentUser);
          store.dispatch(userConnected(true));
        })
        .catch((error) => {
          console.log('impossible de se connecter', error.message);
        });
      break;
    }

    case LOGOUT: {
      axios.post(`${serverURL}/logout`, {},
        {
          withCredentials: true,
        })
        .then((response) => {
          Cookies.remove('token');
          store.dispatch(userConnected(false));
          store.dispatch(userDisconnected(true));
        })
        .catch((error) => {
          console.log('Impossible de déconnecter l\'utilisateur', error.message);
        });
      break;
    }

    case CHECK_IF_LOGGED: {
      axios.post(`${serverURL}/isLogged`, {},
        {
          withCredentials: true,
        })
        .then((response) => {
          console.log('je suis bien connecté');
          store.dispatch(userConnected(true));
        })
        .catch((error) => {
          console.log('impossible de se connecter', error.message);
        });
      break;
    }
    default:
      next(action);
  }
};
export default auth;
