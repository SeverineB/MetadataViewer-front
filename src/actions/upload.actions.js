// ACTION TYPES

export const FETCH_FILES = 'FETCH_FILES';
export const SAVE_FILES = 'SAVE_FILES';
export const CHANGE_FILE = 'CHANGE_FILE';
export const CHANGE_URL = 'CHANGE_URL';
export const SAVE_FILE = 'SAVE_FILE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
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

export const saveFile = () => ({
  type: SAVE_FILE,
});

export const uploadFile = () => ({
  type: UPLOAD_FILE,
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