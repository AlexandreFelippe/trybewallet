import { AnyAction } from 'redux';
import { User } from '../../types';
import { SUBMIT_USER } from '../actions';

const INITIAL_STATE: User = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SUBMIT_USER:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
