import { connect } from 'react-redux';

import Gallery from '../components/Gallery/Gallery';

import { fetchFiles } from '../actions';

const mapStateToProps = (state) => ({
  files: state.image.files,
  isLogged: state.auth.isLogged,
  isDeleted: state.image.isDeleted,
  errors: state.error.errors,
  loading: state.image.loading,
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
