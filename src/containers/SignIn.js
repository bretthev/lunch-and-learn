import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../actions/userActions';
import SignIn from '../components/SignIn'

const mapStateToProps = (state) => {
  const currentUser = state.currentUser;
  return {
    currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
