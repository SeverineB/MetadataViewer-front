/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

import {
  REGISTER,
  LOGIN,
  LOGOUT,
  CHECK_IF_LOGGED,
  saveUser,
  finishLoading,
  registerSuccess,
  registerFailed,
  loginSuccess,
  loginFailed,
  userDisconnected,
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
          console.log('RESPONSE AFTER REGISTER ', response);
          if (response.status === 200) {
            store.dispatch(registerSuccess());
          }
        })
        .catch((error) => {
          console.log('impossible de créer le compte', error.response.data);
          store.dispatch(registerFailed(error.response.data.message));
        })
        .finally(() => {
          store.dispatch(finishLoading());
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
          localStorage.setItem('username', response.data.session.username);
          localStorage.setItem('id', response.data.session._id);
          store.dispatch(saveUser({ ...response.data }));
          store.dispatch(loginSuccess());
        })
        .catch((error) => {
          store.dispatch(loginFailed(error.response.data.message));
        })
        .finally(() => {
          store.dispatch(finishLoading());
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
          console.log('je suis bien déconnecté');
          localStorage.removeItem('username');
          store.dispatch(userDisconnected());
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
          store.dispatch(loginSuccess(true));
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
