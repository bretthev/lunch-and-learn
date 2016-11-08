import App from '../components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getIsUserSignedIn,
  logoutUser,
} from '../actions/userActions';

const mapStateToProps = (state) => ({
  isUserSignedIn: getIsUserSignedIn(state),
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    logoutUser,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
