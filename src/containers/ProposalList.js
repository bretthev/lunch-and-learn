import { connect } from 'react-redux';
import { getProposalsFromDatabase, deleteProposal } from '../actions/proposalActions';
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
  return bindActionCreators({ listenForUser, getProposalsFromDatabase, deleteProposal }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
