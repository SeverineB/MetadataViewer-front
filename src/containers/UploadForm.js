import { connect } from 'react-redux';

import UploadForm from '../components/UploadForm/UploadForm';

import { changeFile, changeUrl, uploadFile } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  loading: state.image.isLogged,
  file: state.image.file,
  fileUrl: state.image.fileUrl,
});

const mapDispatchToProps = (dispatch) => ({
  changeFile: (file) => {
    dispatch(changeFile(file));
  },
  changeUrl: (fileUrl) => {
    dispatch(changeUrl(fileUrl));
  },
  uploadFile: () => {
    dispatch(uploadFile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadForm);
