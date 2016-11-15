import { bindActionCreators } from 'redux';
import UserList from '../components/UserList';
import { makeUserAdmin } from '../actions/userActions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeUserAdmin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
