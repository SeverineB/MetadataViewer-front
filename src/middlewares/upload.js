import axios from 'axios';

import {
  FETCH_FILES,
  saveFiles,
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
      console.log('FILE TO UPLOAD IN REQUEST:', state.upload.file);
      axios.post(`${serverURL}/upload`, formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log('file bien uploadé');
        })
        .catch((error) => {
          console.log('il y a une erreur !');
        });
      break;
    }

    case DELETE_PICTURE: {
      const state = store.getState();
      const fileToDelete = state.upload.file;
      axios.delete(`http://localhost:3001/api/images/delete/${fileToDelete.id}`,
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
