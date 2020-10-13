import { connect } from 'react-redux';

import UploadForm from '../components/UploadForm/UploadForm';

import { changeFile, changeUrl, uploadFile } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  file: state.upload.picture,
  fileUrl: state.upload.fileUrl,
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
