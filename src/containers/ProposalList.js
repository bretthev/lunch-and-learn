import { connect } from 'react-redux';
import { getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, updateLikes } from '../actions/proposalActions';
import { getPresentationsFromDatabase } from '../actions/presentationActions';
import { bindActionCreators } from 'redux';
import ProposalList from '../components/ProposalList';
import { getTargetProposal, getProposals } from '../store/reducers/rootReducer';
import { getUsersFromDatabase } from '../actions/userActions';


const mapStateToProps = (state) => {
  const { currentUser } = state;
  const proposals = getProposals(state);
  const targetProposal  = getTargetProposal(state);
  return {
    proposals,
    currentUser,
    targetProposal
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsersFromDatabase, getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, getPresentationsFromDatabase, updateLikes }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
