/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

import {
  FETCH_FILES,
  saveFiles,
  saveMetadata,
  saveFile,
  userConnected,
  finishLoading,
  getErrors,
  UPLOAD_FILE,
} from '../actions';

import api from '../services/api';

const upload = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FILES: {
      api.get('images')
        .then((response) => {
          store.dispatch(saveFiles(response.data));
          if (response.data.metadata) {
            store.dispatch(saveMetadata(response.data.metadata));
          }
        })
        .catch((error) => {
          store.dispatch(userConnected(false));
          if (error) {
            store.dispatch(getErrors(error));
            store.dispatch(finishLoading());
          }
        });
      break;
    }

    case UPLOAD_FILE: {
      const state = store.getState();
      const formData = new FormData();
      formData.append('image', state.upload.file);
      api.post('images/upload', formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log('RES DANS UPLOAD :', response.data);
          store.dispatch(saveFile(response.data));
          store.dispatch(saveMetadata({ ...response.data }));
        })
        .catch((error) => {
          console.log('il y a une erreur !');
          store.dispatch(getErrors(error));
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      break;
    }
    default:
      next(action);
  }
};
export default upload;
