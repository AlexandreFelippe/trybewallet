import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const { user } = useSelector((state: GlobalStateType) => state);

  return (
    <div>
      <p data-testid="email-field">
        Email:
        { user.email }
      </p>
      <p data-testid="total-field">
        Despesa Total: 0
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </div>
  );
}

export default Header;
