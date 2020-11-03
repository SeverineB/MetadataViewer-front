import { connect } from 'react-redux';

import Gallery from '../components/Gallery/Gallery';

import { fetchFiles } from '../actions';

const mapStateToProps = (state) => ({
  files: state.image.files,
  isLogged: state.auth.isLogged,
  isDeleted: state.image.isDeleted,
  errors: state.error.errors,
  isLoading: state.image.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFiles: () => {
    dispatch(fetchFiles());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery);
