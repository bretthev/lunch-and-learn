import { combineReducers } from 'redux';
import currentUser from './currentUser';
import { proposals, targetProposal } from './proposals';
import presentations from './presentations';


const rootReducer = combineReducers({
  currentUser,
  proposals,
  targetProposal,
  presentations
});

export default rootReducer;
