import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm';
import mockData from './helpers/mockData';
import * as APIModule from '../services/fetchApi';
import App from '../App';

describe('Testes do componente WalletForm', () => {
  it('estão presentes na tela um cabeçalho, um input para valor da despesa, um para descrição, um para moeda, um para meio de pagamento, um para tipo de despesa e um botão', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const inputValue = screen.getByRole('textbox', { name: /valor da despesa:/i });
    const inputDescription = screen.getByRole('textbox', { name: /descrição da despesa:/i });
    const inputCurrency = screen.getByRole('combobox', { name: /moeda/i });
    const inputMethod = screen.getByRole('combobox', { name: /método de pagamento:/i });
    const inputTag = screen.getByRole('combobox', { name: /tipo de despesa:/i });
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(inputCurrency).toBeInTheDocument();
    expect(inputMethod).toBeInTheDocument();
    expect(inputTag).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  beforeEach(() => {
    vi.spyOn(APIModule, 'fetchApi').mockResolvedValue(mockData);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it('adiciona despesa na carteira', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const inputValue = screen.getByRole('textbox', { name: /valor da despesa:/i });
    const inputDescription = screen.getByRole('textbox', { name: /descrição da despesa:/i });
    const selectCurrency = screen.getByRole('combobox', { name: /moeda/i });
    const selectMethod = screen.getByRole('combobox', { name: /método de pagamento:/i });
    const selectTag = screen.getByRole('combobox', { name: /tipo de despesa:/i });
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    const sum = screen.getByTestId('total-field');
    await userEvent.type(inputValue, '100');
    await userEvent.type(inputDescription, 'garrafa');
    await userEvent.selectOptions(selectCurrency, 'USD');
    await userEvent.selectOptions(selectMethod, 'Dinheiro');
    await userEvent.selectOptions(selectTag, 'Alimentação');
    await userEvent.click(button);
    expect(sum).toHaveTextContent(`${(100 * Number(mockData.USD.ask)).toFixed(2)}`);
    expect(screen.getByRole('cell', { name: /garrafa/i })).toHaveTextContent('garrafa');
    expect(screen.getByRole('cell', { name: /alimentação/i })).toHaveTextContent(/alimentação/i);
    expect(screen.getByRole('cell', { name: /dinheiro/i })).toHaveTextContent(/dinheiro/i);
    expect(screen.getByRole('cell', { name: /dólar americano\/real brasileiro/i })).toHaveTextContent(/dólar americano\/real brasileiro/i);
  });
});
