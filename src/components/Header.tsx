import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const { user } = useSelector((state: GlobalStateType) => state);
  const { expenses } = useSelector((state: GlobalStateType) => state.wallet.expenses);
  console.log(expenses);
  // const initialState: number = 0;

  return (
    <div>
      <p data-testid="email-field">
        Email:
        { user.email }
      </p>
      <p data-testid="total-field">
        Despesa Total:
        0,00
        {/* { expense.lenght ? expense.reduce((acc: number, expenses: SubmitCurenciesType) => {
          return acc + (Number(expenses.) * Number(expense.ask));
        }, 0) : initialState.toFixed(2)} */}
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </div>
  );
}

export default Header;
