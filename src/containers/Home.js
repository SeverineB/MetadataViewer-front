import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import { fetchFiles } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
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
)(Home);
