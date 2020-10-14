/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios';

import {
  FETCH_FILES,
  saveFiles,
  saveMetadata,
  saveFile,
  userDisconnected,
  userConnected,
  UPLOAD_FILE,
  DELETE_PICTURE,
} from '../actions';

const serverURL = 'http://localhost:3001/api/images';

const upload = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FILES: {
      axios.get(`${serverURL}`)
        .then((response) => {
          console.log('FETCH FILES :', response.data);
          store.dispatch(saveFiles(response.data));
          store.dispatch(saveMetadata(response.data.metadata));
        })
        .catch((error) => {
          if (error.statusCode === 401) {
            store.dispatch(userDisconnected(true));
            store.dispatch(userConnected(false));
          }
        });
      break;
    }

    case UPLOAD_FILE: {
      const state = store.getState();
      const formData = new FormData();
      formData.append('image', state.upload.file);
      axios.post(`${serverURL}/upload`, formData,
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
          console.log('file bien uploadé');
        })
        .catch((error) => {
          console.log('il y a une erreur !');
        });
      break;
    }

    case DELETE_PICTURE: {
      const state = store.getState();
      const fileToDelete = state.upload.files.image;
      axios.delete(`http://localhost:3001/api/images/delete/${fileToDelete._id}`,
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
export default upload;
