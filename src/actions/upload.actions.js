// ACTION TYPES

export const FETCH_FILES = 'FETCH_FILES';
export const SAVE_FILES = 'SAVE_FILES';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const SAVE_METADATA = 'SAVE_METADATA';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

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

export const uploadFile = () => ({
  type: UPLOAD_FILE,
});

export const saveMetadata = ({ metadata }) => ({
  type: SAVE_METADATA,
  metaName: metadata.name,
  metaSize: metadata.size,
  metaType: metadata.type,
});

export const deletePicture = () => ({
  type: DELETE_PICTURE,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});
