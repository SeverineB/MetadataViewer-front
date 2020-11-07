import { connect } from 'react-redux';

import App from '../components/App/App';

import { checkIfLogged } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIfLogged: () => {
    dispatch(checkIfLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
