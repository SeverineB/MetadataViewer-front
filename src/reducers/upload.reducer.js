import {
  SAVE_FILES,
  SAVE_METADATA,
  ADD_FILE,
  SAVE_FILE,
  CHANGE_FILE,
  CHANGE_URL,
  DELETE_PICTURE,
} from '../actions';

import { getNextId } from '../selectors';

const initialState = {
  files: [],
  file: {},
  fileUrl: '',
  metadata: {},
  loading: true,
  isSubmitted: false,
  isDeleted: false,
};

const uploadReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FILES:
      return {
        ...state,
        files: action.files,
      };
    case SAVE_METADATA:
      return {
        ...state,
        metadata: {
          ...state.metadata,
          name: action.metaName,
          size: action.metaSize,
          type: action.metaType,
        },
      };
    case SAVE_FILE:
      return {
        ...state,
        id: action.id,
        imageUrl: action.imageUrl,
      };
    case CHANGE_FILE:
      return {
        ...state,
        file: action.file,
      };
    case CHANGE_URL:
      return {
        ...state,
        fileUrl: action.fileUrl,
      };
    case DELETE_PICTURE:
      return state.filter((picture) => picture.id !== picture);
    default:
      return state;
  }
};

export default uploadReducer;
