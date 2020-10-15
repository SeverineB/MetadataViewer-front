import {
  SAVE_FILES,
  SAVE_METADATA,
  SAVE_FILE,
  FINISH_LOADING,
  CHANGE_FILE,
  CHANGE_URL,
} from '../actions';

const initialState = {
  files: [],
  file: {},
  fileUrl: '',
  metadata: {},
  loading: true,
};

const uploadReducer = (state = initialState, action = {}) => {
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
    default:
      return state;
  }
};

export default uploadReducer;
