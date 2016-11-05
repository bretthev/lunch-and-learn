import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProposalToPresentations } from '../actions/presentationActions';
import FinalizePresentation from '../components/FinalizePresentation';

const mapStateToProps = (state) => {
  const { currentUser, targetProposal } = state;
  return {
    currentUser,
    targetProposal
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addProposalToPresentations }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalizePresentation)
