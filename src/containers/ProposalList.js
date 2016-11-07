import { connect } from 'react-redux';
import { getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, updateLikes } from '../actions/proposalActions';
import { getPresentationsFromDatabase } from '../actions/presentationActions';
import { findCurrentUserInList } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import ProposalList from '../components/ProposalList';
import { getTargetProposal, getProposals, getUsers } from '../store/reducers/rootReducer';


const mapStateToProps = (state) => {
  const { currentUser } = state;
  const proposals = getProposals(state);
  const targetProposal  = getTargetProposal(state);
  const users = getUsers(state)
  return {
    proposals,
    currentUser,
    targetProposal,
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ findCurrentUserInList, getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, getPresentationsFromDatabase, updateLikes }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
