import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispacth, GlobalStateType } from '../types';
import { fetchExpenses, submitCurrencies } from '../redux/actions';

const expenses = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'dinheiro',
  tag: 'alimentação',
};

function WalletForm() {
  const [form, setForm] = useState(expenses);
  const { value, description, currency, method, tag } = form;
  const { wallet: { currencies } } = useSelector((state: GlobalStateType) => state);
  const dispatch: AppDispacth = useDispatch();

  useEffect(() => {
    dispatch(submitCurrencies());
  }, []);

  function handleChange({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(fetchExpenses(form));
    setForm(expenses);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Valor da Despesa:
        <input
          data-testid="value-input"
          type="text"
          name="value"
          value={ value }
          onChange={ handleChange }
          required
        />
      </label>
      <label>
        Descrição da Despesa:
        <input
          data-testid="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ handleChange }
          required
        />
      </label>
      <label>
        Moeda
        <select
          name="currency"
          data-testid="currency-input"
          onChange={ handleChange }
          value={ currency }
        >
          {currencies.map((currencie, index) => (
            <option key={ index }>
              {currencie}
            </option>
          ))}
        </select>
      </label>
      <label>
        Método de Pagamento:
        <select
          name="method"
          id=""
          data-testid="method-input"
          value={ method }
          onChange={ handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartão de crédito">Cartão de crédito</option>
          <option value="cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label>
        Tipo de Despesa:
        <select
          name="tag"
          id=""
          data-testid="tag-input"
          value={ tag }
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
