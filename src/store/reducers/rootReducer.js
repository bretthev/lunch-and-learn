import { combineReducers } from 'redux';
import currentUser from './currentUser';
import { proposals, targetProposal } from './proposals';
import { presentations, targetPresentation, getTargetPresentation, getPresentations } from './presentations';


const rootReducer = combineReducers({
  currentUser,
  proposals,
  targetProposal,
  presentations,
  targetPresentation
});

export default rootReducer;


export const getTargetPresentationState = (state) => getTargetPresentation(state);
export const getPresentationsState = (state) => getPresentations(state);
