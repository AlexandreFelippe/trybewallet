import { AnyAction } from 'redux';
import { WalletType } from '../../types';
import { SUBMIT_CURRENCIES, SUBMIT_EXPENSES } from '../actions';

const INITIAL_STATE: WalletType = {
  idToEdit: 0,
  expenses: [],
  currencies: [],
  editor: false,
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SUBMIT_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case SUBMIT_EXPENSES:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            ...action.payload.expenses,
            id: state.expenses.length,
            exchangeRates: action.payload.data,
          },
        ],
      };
    default:
      return state;
  }
};

export default walletReducer;
