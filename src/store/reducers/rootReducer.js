import { combineReducers } from 'redux';
import currentUser from './currentUser';
import proposals from './proposals';


const rootReducer = combineReducers({
  currentUser,
  proposals
});

export default rootReducer;
