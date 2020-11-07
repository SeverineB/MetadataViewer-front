/* eslint-disable no-underscore-dangle */
import {
  SAVE_FILES,
  SAVE_METADATA,
  SAVE_FILE,
  UPLOAD_FILE,
  UPLOAD_SUCCESS,
  UPLOAD_FAILED,
  ADD_FILE,
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
  isLoading: false,
  isLoaded: false,
  isDeleted: false,
};

const imageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case SAVE_FILES:
      return {
        ...state,
        isLoading: false,
        files: action.files,
      };
    case ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.file],
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
        file: {
          ...state.file,
          id: action.id,
          imageUrl: action.imageUrl,
        },
      };
    case UPLOAD_FILE:
      console.log('action file in upload in reducer', action.file.new);
      return {
        ...state,
        files: [...state.files, action.file],
        isLoading: true,
        isLoaded: false,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: true,
        isLoaded: true,
      };
    case UPLOAD_FAILED:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
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
    default:
      return state;
  }
};

export default imageReducer;
