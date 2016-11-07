import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import { getUsers } from '../store/reducers/rootReducer';
import { bindActionCreators } from 'redux';
import { getUsersFromDatabase } from '../actions/userActions';

const mapStateToProps = (state) => {
  const currentUser = state.currentUser;
  const users = getUsers(state)
  return {
    currentUser,
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsersFromDatabase}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
