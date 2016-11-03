import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendProposalToDatabase, clearTargetProposal } from '../actions/proposalActions';
import ProposalForm from '../components/ProposalForm';

const mapStateToProps = (state) => {
  const { currentUser, targetProposal } = state;
  const buttonText = 'Add proposal.'
  return {
    currentUser,
    targetProposal,
    buttonText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitProposal: (proposal) => {
      dispatch(sendProposalToDatabase(proposal))
      dispatch(clearTargetProposal())
    }
  }};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm)
