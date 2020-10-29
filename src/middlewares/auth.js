/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import Cookies from 'js-cookie';

import {
  REGISTER,
  LOGIN,
  LOGOUT,
  CHECK_IF_LOGGED,
  saveUser,
  finishLoading,
  userConnected,
  userDisconnected,
  registerSuccess,
} from '../actions';

import api from '../services/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      const state = store.getState();
      const { username, email, password } = state.register;
      api.post('users/register', {
        username,
        email,
        password,
      },
      {
        withCredentials: true,
      })
        .then((response) => {
          console.log('utilisateur enregistré dans la base de données !');
          store.dispatch(registerSuccess(true));
        })
        .catch((error) => {
          console.log('impossible de créer le compte', error.message);
          store.dispatch(registerSuccess(false));
        });
      next(action);
      break;
    }
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;
      api.post('users/login', {
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
          store.dispatch(finishLoading());
        })
        .catch((error) => {
          console.log('impossible de se connecter', error.message);
          store.dispatch(userDisconnected());
        });
      next(action);
      break;
    }

    case LOGOUT: {
      api.get('users/logout',
        {
          withCredentials: true,
        })
        .then((response) => {
          localStorage.removeItem('username');
          store.dispatch(userConnected(false));
        })
        .catch((error) => {
          console.log('Impossible de déconnecter l\'utilisateur', error.message);
        });
      next(action);
      break;
    }

    case CHECK_IF_LOGGED: {
      api.post('users/isLogged', {},
        {
          withCredentials: true,
        })
        .then((response) => {
          console.log('je suis bien connecté');
          store.dispatch(userConnected(true));
        })
        .catch((error) => {
          console.log('impossible de se connecter', error.message);
          if (error) {
            localStorage.removeItem('username');
          }
          store.dispatch(userDisconnected());
        });
      break;
    }
    default:
      next(action);
  }
};
export default auth;
