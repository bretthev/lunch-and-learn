import { connect } from 'react-redux';
import { getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal } from '../actions/proposalActions';
import { listenForUser } from '../actions/authActions';
import { bindActionCreators } from 'redux';
import ProposalList from '../components/ProposalList';

const mapStateToProps = (state) => {
  const { proposals, currentUser } = state;
  return {
    proposals,
    currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
