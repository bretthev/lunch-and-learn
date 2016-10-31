import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendProposalToStore } from '../actions/proposalActions';
import AddProposal from '../components/AddProposal';

const mapStateToProps = (state) => {
  const currentUser = state.currentUser;
  return {
    currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sendProposalToStore }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProposal)
