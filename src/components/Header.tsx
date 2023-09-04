import { useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { ExpensesType, GlobalStateType } from '../types';

function Header() {
  const { user } = useSelector((state: GlobalStateType) => state);
  const { expenses } = useSelector((state: GlobalStateType) => state.wallet);
  let sum = 0;
  expenses.forEach((expense) => {
    sum += (Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask));
  });

  return (
    <div>
      <p data-testid="email-field">
        Email:
        { user.email }
      </p>
      <p data-testid="total-field">
        { expenses.length > 0 ? `${sum.toFixed(2)}` : '0.00' }
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </div>
  );
}

export default Header;
