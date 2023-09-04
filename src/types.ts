import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserType = {
  email: '', // string que armazena o e-mail da pessoa usuária
  password: '',
};
export type WalletType = {
  currencies: string[], // array de string
  expenses: ExpensesType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

export type SubmitCurenciesType = {
  currencies: string[],
  data?: string[], // retorna um objeto com vários objetos de strings*************
  expenses?: string[], // não sei tipar*********
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: any;
};

export type GlobalStateType = {
  user: UserType,
  wallet: WalletType,
  expenses: ExpensesType[];
};

export type AppDispacth = ThunkDispatch<GlobalStateType, unknown, AnyAction>;
