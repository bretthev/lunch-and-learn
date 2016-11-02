import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProposal } from '../actions/proposalActions';
import ProposalForm from '../components/ProposalForm';

const mapStateToProps = (state) => {
  const { currentUser, targetProposal } = state;
  return {
    currentUser,
    targetProposal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitProposal: (proposal) => {
      dispatch(editProposal(proposal))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm)
