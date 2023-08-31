import { AnyAction } from 'redux';
import { WalletType } from '../../types';

const INITIAL_STATE: WalletType = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => state;

export default walletReducer;
