import { connect } from 'react-redux';
import { getPresentationsFromDatabase, grabTargetPresentation, updateRsvps } from '../actions/presentationActions';
import { bindActionCreators } from 'redux';
import PresentationList from '../components/PresentationList';
import { getTargetPresentation, getPresentations } from '../store/reducers/rootReducer';

const mapStateToProps = (state) => {
  const { currentUser } = state;
  const targetPresentation = getTargetPresentation(state)
  const presentations = getPresentations(state)
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
