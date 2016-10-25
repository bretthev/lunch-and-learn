import { connect } from 'react-redux';
import TestRouter from '../components/TestRouter';
import { getCurrentUser } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    testFirebase: (value) => {
      dispatch(getCurrentUser(value))
    }
  }
}

export default connect(null, mapDispatchToProps)(TestRouter)
