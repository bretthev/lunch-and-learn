import { combineReducers } from 'redux';
import currentUser from './currentUser';
import { proposals, targetProposal } from './proposals';
import { presentations, targetPresentation } from './presentations';
import * as fromPresentations from './presentations';


const rootReducer = combineReducers({
  currentUser,
  proposals,
  targetProposal,
  presentations,
  targetPresentation
});

export default rootReducer;

export const getTargetPresentation = (state) => fromPresentations.getTargetPresentation(state);
