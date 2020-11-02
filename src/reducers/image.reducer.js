/* eslint-disable no-underscore-dangle */
import {
  SAVE_FILES,
  SAVE_METADATA,
  SAVE_FILE,
  UPLOAD_FILE,
  SAVE_FILE_TO_DELETE,
  FINISH_LOADING,
  CHANGE_FILE,
  CHANGE_URL,
  DELETE_FILE,
  DELETE_PICTURE_ON_SCREEN,
} from '../actions';

const initialState = {
  files: [],
  file: {},
  fileUrl: '',
  metadata: {},
  loading: true,
  isDeleted: false,
};

const imageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FILES:
      return {
        ...state,
        loading: false,
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
    case UPLOAD_FILE:
      return {
        ...state,
        files: [...state.files, action.file],
      };
    case SAVE_FILE_TO_DELETE:
      return {
        ...state,
        file: action.file,
      };
    case DELETE_PICTURE_ON_SCREEN:
      return {
        files: [
          ...state.files.filter((file) => file.image._id !== action.id),
        ],
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
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
    case DELETE_FILE:
      return {
        ...state,
        isDeleted: true,
      };
    default:
      return state;
  }
};

export default imageReducer;
