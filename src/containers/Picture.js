import { connect } from 'react-redux';

import Picture from '../components/Gallery/Picture/Picture';

import { changeFile } from '../actions';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeFile: () => {
    dispatch(changeFile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Picture);
