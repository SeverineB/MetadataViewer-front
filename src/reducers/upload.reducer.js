import {
  SAVE_FILES,
  SAVE_METADATA,
  CHANGE_FILE,
  CHANGE_URL,
  TOGGLE_MODAL,
} from '../actions';

const initialState = {
  files: [],
  file: {},
  fileUrl: '',
  metadata: {},
  loading: true,
  isSubmitted: false,
  isDeleted: false,
  open: false,
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
    case TOGGLE_MODAL:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default uploadReducer;
