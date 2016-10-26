import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';

const mapStateToProps = (state) => {
  const currentUser = state.currentUser;
  return {
    currentUser
  }
}

export default connect(mapStateToProps, null)(Homepage)
