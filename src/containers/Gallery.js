import { connect } from 'react-redux';

import Gallery from '../components/Gallery/Gallery';

const mapStateToProps = (state) => ({
  files: state.upload.files,
  isLogged: state.auth.isLogged,
  errors: state.error.errors,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery);
