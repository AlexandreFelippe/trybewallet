import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// const INITIAL_STATE = {};

// const exampleReducer = (state = INITIAL_STATE, action: AnyAction) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const rootreducer = combineReducers({ user, wallet });

export default rootreducer;
