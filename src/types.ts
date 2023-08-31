export type UserType = {
  email: '', // string que armazena o e-mail da pessoa usuária
  password: '',
};
export type WalletType = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

export type GlobalStateType = {
  user: UserType,
  wallet: WalletType,
};
