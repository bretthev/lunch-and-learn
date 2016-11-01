import { connect } from 'react-redux';
import { getProposalsFromDatabase, deleteProposal } from '../actions/proposalActions';
import { bindActionCreators } from 'redux';
import ProposalList from '../components/ProposalList';

const mapStateToProps = (state) => {
  const proposals = state.proposals;
  return {
    proposals
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getProposalsFromDatabase, deleteProposal }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
