import { connect } from 'react-redux';

import App from '../components/App/App';

import { fetchFiles, checkIfLogged } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFiles: () => {
    dispatch(fetchFiles());
  },
  checkIfLogged: () => {
    dispatch(checkIfLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
