import { connect } from 'react-redux';
import { getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal } from '../actions/proposalActions';
import { listenForUser } from '../actions/authActions';
import { getPresentationsFromDatabase } from '../actions/presentationActions';
import { bindActionCreators } from 'redux';
import ProposalList from '../components/ProposalList';

const mapStateToProps = (state) => {
  const { proposals, currentUser, targetProposal } = state;
  return {
    proposals,
    currentUser,
    targetProposal
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, getPresentationsFromDatabase }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
