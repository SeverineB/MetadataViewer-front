import { connect } from 'react-redux';

import Gallery from '../components/Gallery/Gallery';

import { deletePicture } from '../actions';

const mapStateToProps = (state) => ({
  files: state.upload.files,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery);
