import { connect } from 'react-redux';
import Home from '../components/Home/Home';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  isLoading: state.image.isLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
