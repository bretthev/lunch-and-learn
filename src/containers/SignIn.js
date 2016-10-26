import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';
import SignIn from '../components/SignIn'

const mapStateToProps = (state) => {
  const authState = state.auth;
  return {
    authState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
