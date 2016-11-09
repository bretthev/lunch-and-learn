import { combineReducers } from 'redux';
import currentUser from './currentUser';
import { proposals, targetProposal } from './proposals';
import * as fromProposals from './proposals';
import { presentations, targetPresentation } from './presentations';
import * as fromPresentations from './presentations';
import { users } from './users';
import * as fromUsers from './users';

const rootReducer = combineReducers({
  currentUser,
  proposals,
  targetProposal,
  presentations,
  targetPresentation,
  users
});

export default rootReducer;

export const getProposals = (state) => fromProposals.getProposals(state);
export const getTargetProposal = (state) => fromProposals.getTargetProposal(state);

export const getPresentations = (state) => fromPresentations.getPresentations(state);
export const getTargetPresentation= (state) => fromPresentations.getTargetPresentation(state);

export const getUsers = (state) => fromUsers.getUsers(state);
