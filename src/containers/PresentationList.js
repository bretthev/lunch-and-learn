import { connect } from 'react-redux';
import { getPresentationsFromDatabase } from '../actions/presentationActions';
import { bindActionCreators } from 'redux';
import PresentationList from '../components/PresentationList';

const mapStateToProps = (state) => {
  const { presentations, currentUser } = state;
  return {
    presentations,
    currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPresentationsFromDatabase }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationList)
