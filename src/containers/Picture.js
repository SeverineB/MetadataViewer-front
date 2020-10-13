import { connect } from 'react-redux';

import Picture from '../components/Gallery/Picture/Picture';

import { changeFile, deletePicture, toggleModal } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  isDeleted: state.upload.isDeleted,
  metadata: state.upload.metadata,
  open: state.upload.open,
});

const mapDispatchToProps = (dispatch) => ({
  changeFile: () => {
    dispatch(changeFile());
  },
  deletePicture: (file) => {
    dispatch(deletePicture(file));
  },
  toggleModal: () => {
    dispatch(toggleModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Picture);
