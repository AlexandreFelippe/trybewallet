import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserType = {
  email: '', // string que armazena o e-mail da pessoa usuária
  password: '',
};
export type WalletType = {
  currencies: string[], // array de string
  expenses: ExpenseType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

// export type SubmitCurenciesType = {
//   currencies: string[],
//   data?: string[], // retorna um objeto com vários objetos de strings*************
//   expense?: string[], // não sei tipar*********
// };

export type ExpenseType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: [{
    ask: number;
  }];
};

export type GlobalStateType = {
  user: UserType,
  wallet: WalletType,
  expenses: []
};

export type AppDispacth = ThunkDispatch<GlobalStateType, unknown, AnyAction>;
