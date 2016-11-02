import { combineReducers } from 'redux';

const allById = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PRESENTATIONS_SUCCESS':
      let newState = {};
      action.presentations.forEach((p) => newState[p.id] = p);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  allById,
});
