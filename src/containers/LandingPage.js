import { connect } from 'react-redux';
import { LandingPage } from '../components/LandingPage';

const mapStateToProps = (state) => {
  const { currentUser } = state
  return { currentUser }
}

export default connect(mapStateToProps, null)(LandingPage);
