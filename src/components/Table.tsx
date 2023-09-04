import { useSelector, useDispatch } from 'react-redux';
import { GlobalStateType } from '../types';
import { deleteExpense } from '../redux/actions';

function Table() {
  const expensesData = useSelector((state: GlobalStateType) => state.wallet.expenses);
  const dispatch = useDispatch();

  function handleClearExpense(id: number) {
    dispatch(deleteExpense(id));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expensesData && expensesData.map(({
          id,
          description,
          tag,
          method,
          value,
          exchangeRates,
          currency,
        }) => (
          <tr key={ id }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ Number(value).toFixed(2) }</td>
            <td>{ exchangeRates[currency].name }</td>
            <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
            <td>
              {(Number(value)
              * exchangeRates[currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              <button
                data-testid="delete-btn"
                onClick={ () => handleClearExpense(id) }
              >
                Excluir
              </button>
            </td>
          </tr>

        ))}
      </tbody>
    </table>
  );
}

export default Table;
