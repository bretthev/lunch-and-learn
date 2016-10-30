import { connect } from 'react-redux';
import ProposalList from '../components/ProposalList';

const mapStateToProps = (state) => {
  const proposals = state.proposals;
  return {
    proposals
  }
}

export default connect(mapStateToProps, null)(ProposalList)
