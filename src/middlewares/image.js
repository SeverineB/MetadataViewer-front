/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

import {
  FETCH_USER_FILES,
  saveFiles,
  saveMetadata,
  saveFile,
  finishLoading,
  getErrors,
  UPLOAD_FILE,
  uploadSuccess,
  uploadFailed,
  DELETE_FILE,
} from '../actions';

import api from '../services/api';

const image = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_FILES: {
      const id = localStorage.getItem('id');
      api.get(`users/${id}/images`,
        {
          withCredentials: true,
        })
        .then((response) => {
          store.dispatch(saveFiles(response.data));
          if (response.data.metadata) {
            store.dispatch(saveMetadata(response.data.metadata));
          }
        })
        .catch((error) => {
          if (error) {
            store.dispatch(getErrors(error.response.data.message));
          }
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      break;
    }

    case UPLOAD_FILE: {
      const state = store.getState();
      const id = localStorage.getItem('id');
      const formData = new FormData();
      formData.append('image', state.image.file);
      formData.append('userId', id);
      api.post(`images/upload/${id}`, formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log('RESPONSE', response.data);
          store.dispatch(saveFile({ ...response.data }));
          store.dispatch(saveMetadata({ ...response.data }));
          store.dispatch(uploadSuccess());
        })
        .catch((error) => {
          if (error) {
            console.log('error dans Upload file', error.response);
            store.dispatch(getErrors(error.response.data.message));
          }
          store.dispatch(uploadFailed());
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      break;
    }

    case DELETE_FILE: {
      const state = store.getState();
      const imageId = state.image.file.image._id;
      const userId = localStorage.getItem('id');
      api.delete(`images/delete/${userId}/${imageId}`,
        {
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log('delete ok');
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default image;
