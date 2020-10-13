import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import { fetchFiles, redirectHome } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  loading: state.auth.loading,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFiles: () => {
    dispatch(fetchFiles());
  },
  redirectHome: (value) => {
    dispatch(redirectHome(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
