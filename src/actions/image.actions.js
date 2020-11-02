// ACTION TYPES

export const FETCH_FILES = 'FETCH_FILES';
export const SAVE_FILES = 'SAVE_FILES';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
export const SAVE_FILE = 'SAVE_FILE';
export const SAVE_FILE_TO_DELETE = 'SAVE_FILE_TO_DELETE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const DELETE_FILE = 'DELETE_FILE';
export const DELETE_PICTURE_ON_SCREEN = 'DELETE_PICTURE_ON_SCREEN';
export const FINISH_LOADING = 'FINISH_LOADING';
export const SAVE_METADATA = 'SAVE_METADATA';

// ACTION CREATORS

export const fetchFiles = () => ({
  type: FETCH_FILES,
});

export const changeFile = (file) => ({
  type: CHANGE_FILE,
  file,
});

export const changeUrl = (fileUrl) => ({
  type: CHANGE_URL,
  fileUrl,
});

export const saveFiles = (files) => ({
  type: SAVE_FILES,
  files,
});

export const saveFile = (file) => ({
  type: SAVE_FILE,
  file,
});

export const saveFileToDelete = (file) => ({
  type: SAVE_FILE_TO_DELETE,
  file,
});

export const uploadFile = (file) => ({
  type: UPLOAD_FILE,
  file,
});

export const deleteFile = () => ({
  type: DELETE_FILE,
});

export const deletePictureOnScreen = (id) => ({
  type: DELETE_PICTURE_ON_SCREEN,
  id,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const saveMetadata = ({ metadata }) => ({
  type: SAVE_METADATA,
  metaName: metadata.name,
  metaSize: metadata.size,
  metaType: metadata.type,
});
