import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';
import * as APIModule from '../services/fetchApi';
import App from '../App';

beforeEach(() => {
  vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(mockData);
});
afterEach(() => {
  vi.restoreAllMocks();
});
describe('Teste do botão delete', async () => {
  renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
  const deleteButton = screen.getByTestId('delete-btn');
  const inputValue = screen.getByRole('textbox', { name: /valor da despesa:/i });
  const inputDescription = screen.getByRole('textbox', { name: /descrição da despesa:/i });
  const selectCurrency = screen.getByRole('combobox', { name: /moeda/i });
  const selectMethod = screen.getByRole('combobox', { name: /método de pagamento:/i });
  const selectTag = screen.getByRole('combobox', { name: /tipo de despesa:/i });
  const sum = screen.getByTestId('total-field');
  await userEvent.type(inputValue, '100');
  await userEvent.type(inputDescription, 'garrafa');
  await userEvent.selectOptions(selectCurrency, 'USD');
  await userEvent.selectOptions(selectMethod, 'Dinheiro');
  await userEvent.selectOptions(selectTag, 'Alimentação');
  await userEvent.click(deleteButton);
  expect(sum).toBe(0.00);
});
