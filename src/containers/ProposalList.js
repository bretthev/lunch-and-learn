import { connect } from 'react-redux';
import { deleteProposal, getProposalsFromDatabase } from '../actions/proposalActions';
import { bindActionCreators } from 'redux';
import ProposalList from '../components/ProposalList';

const mapStateToProps = (state) => {
  const proposals = state.proposals;
  return {
    proposals
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteProposal, getProposalsFromDatabase }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalList)
