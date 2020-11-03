/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

import {
  FETCH_FILES,
  saveFiles,
  saveMetadata,
  saveFile,
  finishLoading,
  getErrors,
  UPLOAD_FILE,
  uploadSuccess,
  uploadFailed,
  DELETE_FILE,
  deleteSuccess,
} from '../actions';

import api from '../services/api';

const image = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FILES: {
      api.get('images')
        .then((response) => {
          console.log('response.data dans fetchfiles ', response.data);
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
      const formData = new FormData();
      formData.append('image', state.image.file);
      api.post('images/upload', formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
          withCredentials: true,
        })
        .then((response) => {
          store.dispatch(saveFile({ ...response.data }));
          store.dispatch(saveMetadata({ ...response.data }));
          store.dispatch(uploadSuccess());
        })
        .catch((error) => {
          store.dispatch(getErrors(error.response.data.message));
          store.dispatch(uploadFailed());
        })
        .finally(() => {
          store.dispatch(finishLoading());
        });
      break;
    }

    case DELETE_FILE: {
      const state = store.getState();
      const id = state.image.file.image._id;
      api.delete(`images/delete/${id}`,
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
