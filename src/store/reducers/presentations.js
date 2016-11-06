// import { combineReducers } from 'redux';

/*
 * Presentation Reducer
 * This reducer is set up to modularize the properties available.
 * I've really enjoyed the strategy of doing action types as:
 * ACTION_NOUN_STATUS (ex. FETCH_PRESENTATIONS_SUCCESS, CREATE_PRESENTATION_REQUEST)
 * This allows us to quickly scan for which actions are happening and helps
 * consistency.
 */

 const presentations = ( state = [], action ) => {
   switch(action.type) {
      case 'FETCH_PRESENTATIONS_SUCCESS':
        return action.presentationsWithKeys
      default: return state
   }
 }

 const targetPresentation = ( state = {author: '', title: '', body: '', location: ''}, action ) => {
   switch(action.type) {
     case 'TARGET_PRESENTATION':
       return Object.assign({}, state, action.presentation)
     case 'CLEAR_TARGET_PRESENTATION':
       return Object.assign({}, state, {title: '', body: '', id: null, author:'', location:''})
   default: return state;
   }
 }

export const getPresentations = (state) => state.presentations
const getTargetPresentation = (state) => state.targetPresentation

module.exports = { presentations, targetPresentation, getTargetPresentation }
// const allById = (state = {}, action) => {
//   let nextState;
//   switch (action.type) {
//     case 'FETCH_PRESENTATIONS_SUCCESS':
//       nextState = { };
//       action.response.forEach(presentation => {
//         nextState[presentation.id] = presentation;
//       });
//       return nextState;
//     // case 'JOIN_PRESENTATION_SUCCESS':
//     // case 'LEAVE_PRESENTATION_SUCCESS':
//     //   return {
//     //     ...state,
//     //     [action.id]: action.response,
//     //   };
//     // case 'DELETE_PRESENTATION_SUCCESS':
//     //   nextState = { ...state };
//     //   delete nextState[action.id];
//     //   return nextState;
//     // case 'CREATE_PRESENTATION_SUCCESS':
//     //   return {
//     //     ...state,
//     //     [action.response.id]: action.response,
//     //   };
//     default:
//       return state;
//   }
// };
//
// /*
//  * isFetching and isSubmitting are just two flags that I've made so we can
//  * show some loading icons and disable buttons which would otherwise cause
//  * the request actions again.
//  */
// const isFetching = (state = false, action) => {
//   switch (action.type) {
//     case 'FETCH_PRESENTATIONS_SUCCESS':
//     case 'FETCH_PRESENTATIONS_FAILURE':
//       return false;
//     case 'FETCH_PRESENTATIONS_REQUEST':
//       return true;
//     default:
//       return state;
//   }
// };
// const isSubmitting = (state = false, action) => {
//   switch (action.type) {
//     case 'CREATE_PRESENTATION_REQUEST':
//       return true;
//     case 'CREATE_PRESENTATION_FAILURE':
//     case 'CREATE_PRESENTATION_SUCCESS':
//       return false;
//     default:
//       return state;
//   }
// };
//
// /*
//  * if there was an issue operating on the presentations we can set this error
//  * and it will be usable in the frontend. When we make a request, we can set
//  * the error to null so it hides it from the UI.
//  * I'm not entirely tied to this solution for showing errors so we can totally
//  * refactor this into a more generic solution.
//  */
// const error = (state = null, action) => {
//   switch (action.type) {
//     case 'FETCH_PRESENTATIONS_FAILURE':
//     case 'CREATE_PRESENTATION_FAILURE':
//       return action.message;
//     case 'FETCH_PRESENTATIONS_REQUEST':
//     case 'CREATE_PRESENTATION_REQUEST':
//       return null;
//     default:
//       return state;
//   }
// };
//
// /*
//  * combine all the reducers together to make a larger reducer. This allows
//  * us to add and remove attributes without any effect to the other attributes.
//  */
// export default combineReducers({
//   allById,
//   error,
//   isFetching,
//   isSubmitting,
// });
//
// /*
//  * these methods prepended with "get" are just convenience methods so the actions
//  * do not need to worry about the structure of the reducer. This is somewhat
//  * like doing SQL in a model where the controller asks for the data from the
//  * model and the model knows how to return it.
//  */
// export const getIsFetching = (state) => state.isFetching;
// export const getAllById = (state) => state.allById;
// export const getById = (state, id) => state.allById[id];
// export const getError = (state) => state.error;
// export const getHasError = (state) => Boolean(state.error); // will be false if error is null. (nicety)
// export const getIsSubmitting = (state) => state.isSubmitting;
// export const getCanEditPresentation = (profile) => profile.isAdmin;
