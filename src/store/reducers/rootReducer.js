import { combineReducers } from 'redux';
import currentUser from './currentUser';
import { proposals, targetProposal } from './proposals';


const rootReducer = combineReducers({
  currentUser,
  proposals,
  targetProposal
});

export default rootReducer;
