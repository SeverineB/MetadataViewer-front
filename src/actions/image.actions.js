// ACTION TYPES

export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
export const FETCH_USER_FILES = 'FETCH_USER_FILES';

export const SAVE_FILES = 'SAVE_FILES';
export const SAVE_FILE = 'SAVE_FILE';
export const SAVE_METADATA = 'SAVE_METADATA';
export const ADD_FILE = 'ADD_FILE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILED = 'UPLOAD_FAILED';

export const DELETE_FILE = 'DELETE_FILE';
export const SAVE_FILE_TO_DELETE = 'SAVE_FILE_TO_DELETE';
export const DELETE_PICTURE_ON_SCREEN = 'DELETE_PICTURE_ON_SCREEN';
export const FINISH_LOADING = 'FINISH_LOADING';

// ACTION CREATORS

export const changeFile = (file) => ({
  type: CHANGE_FILE,
  file,
});

export const changeUrl = (fileUrl) => ({
  type: CHANGE_URL,
  fileUrl,
});

export const fetchUserFiles = () => ({
  type: FETCH_USER_FILES,
});

export const saveFiles = (files) => ({
  type: SAVE_FILES,
  files,
});

export const saveFile = (file) => ({
  type: SAVE_FILE,
  id: file.id,
  imageUrl: file.imageUrl,
});

export const saveMetadata = ({ metadata }) => ({
  type: SAVE_METADATA,
  metaName: metadata.name,
  metaSize: metadata.size,
  metaType: metadata.type,
});

export const uploadFile = () => ({
  type: UPLOAD_FILE,
});

export const uploadSuccess = () => ({
  type: UPLOAD_SUCCESS,
});

export const uploadFailed = () => ({
  type: UPLOAD_FAILED,
});

export const addFile = (file) => ({
  type: ADD_FILE,
  file,
});

export const deleteFile = () => ({
  type: DELETE_FILE,
});

export const saveFileToDelete = (file) => ({
  type: SAVE_FILE_TO_DELETE,
  file,
});

export const deletePictureOnScreen = (id) => ({
  type: DELETE_PICTURE_ON_SCREEN,
  id,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});
