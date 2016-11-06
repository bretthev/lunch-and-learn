import { connect } from 'react-redux';
import { getPresentationsFromDatabase, grabTargetPresentation } from '../actions/presentationActions';
import { bindActionCreators } from 'redux';
import PresentationList from '../components/PresentationList';
import { getTargetPresentation } from '../store/reducers/rootReducer';

const mapStateToProps = (state) => {
  const { presentations, currentUser } = state;
  const targetPresentation = getTargetPresentation(state)
  return {
    presentations,
    currentUser,
    targetPresentation
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getPresentationsFromDatabase, grabTargetPresentation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationList)
