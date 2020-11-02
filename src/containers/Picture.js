import { connect } from 'react-redux';

import Picture from '../components/Gallery/Picture/Picture';

import { changeFile, saveFileToDelete, deletePictureOnScreen, deleteFile } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  isDeleted: state.image.isDeleted,
});

const mapDispatchToProps = (dispatch) => ({
  changeFile: () => {
    dispatch(changeFile());
  },
  saveFileToDelete: (file) => {
    dispatch(saveFileToDelete(file));
  },
  deletePictureOnScreen: (id) => {
    dispatch(deletePictureOnScreen(id));
  },
  deleteFile: () => {
    dispatch(deleteFile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Picture);
