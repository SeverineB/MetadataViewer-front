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
  isLoading: true,
  isDeleted: false,
};

const imageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FILES:
      return {
        ...state,
        isLoading: false,
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
        isLoading: true,
      };
    case SAVE_FILE_TO_DELETE:
      return {
        ...state,
        file: action.file,
      };
    case DELETE_FILE:
      return {
        ...state,
      };
    case DELETE_PICTURE_ON_SCREEN:
      return {
        ...state,
        files: [
          ...state.files.filter((file) => file.image._id !== action.id),
        ],
      };
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
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
    default:
      return state;
  }
};

export default imageReducer;
