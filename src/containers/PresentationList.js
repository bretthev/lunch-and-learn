import { connect } from 'react-redux';
import { getPresentationsFromDatabase, grabTargetPresentation, updateRsvps } from '../actions/presentationActions';
import { bindActionCreators } from 'redux';
import PresentationList from '../components/PresentationList';
import { getTargetPresentationState, getPresentationsState } from '../store/reducers/rootReducer';

const mapStateToProps = (state) => {
  const { currentUser } = state;
  const targetPresentation = getTargetPresentationState(state)
  const presentations = getPresentationsState(state)
  return {
    presentations,
    currentUser,
    targetPresentation
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPresentationsFromDatabase, grabTargetPresentation, updateRsvps }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationList)
