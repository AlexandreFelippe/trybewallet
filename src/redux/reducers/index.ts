// import user from './user';
// import wallet from './wallet';

import { combineReducers } from 'redux';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ exampleReducer });

export default rootReducer;

// export default () => {}; // delete essa linha e configure os seus reducers
