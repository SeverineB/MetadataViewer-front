import { connect } from 'react-redux';

import Gallery from '../components/Gallery/Gallery';

const mapStateToProps = (state) => ({
  files: state.upload.files,
  metadata: state.upload.metadata,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery);
