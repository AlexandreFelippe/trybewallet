import { fetchApi } from '../../services/fetchApi';
import { AppDispacth } from '../../types';

export const SUBMIT_USER = 'SUBMIT_USER';
export const FETCH_API = 'FETCH_API';
export const SUBMIT_EXPENSES = 'SUBMIT_EXPENSES';
export const SUBMIT_CURRENCIES = 'SUBMIT_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const submitUser = (email: string) => ({
  type: SUBMIT_USER,
  payload: email,
});

export const complementCurrencies = (currencies: string[]) => ({
  type: 'SUBMIT_CURRENCIES',
  payload: currencies,
});

export const submitCurrencies = () => {
  return async (dispatch: AppDispacth) => {
    try {
      const getCurrencies = await fetchApi();
      const currenciesArray = Object.keys(getCurrencies).filter((cur) => cur !== 'USDT');
      dispatch(complementCurrencies(currenciesArray));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const submitExpenses = (expenses: object, data: object) => ({
  type: SUBMIT_EXPENSES,
  payload: { data, expenses },
});

export function fetchExpenses(expenses: object) {
  return async (dispatch: AppDispacth) => {
    try {
      const data = await fetchApi();
      dispatch(submitExpenses(expenses, data));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export const deleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});
