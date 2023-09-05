import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes da página de Login', () => {
  it('estão presentes na tela um cabeçalho, um input para email, um para senha e um botão', () => {
    renderWithRouterAndRedux(<App />);

    const text = screen.getByRole('heading', { name: /trybe wallet/i });
    expect(text).toBeInTheDocument();
    const email = screen.getByRole('textbox');
    expect(email).toBeInTheDocument();
    const password = screen.getByLabelText(/senha:/i);
    expect(password).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });
  it('ao clicar o botão faz a verificação de email e senha, se verificado direciona para a rota carteira', async () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox');
    const password = screen.getByLabelText(/senha:/i);
    const button = screen.getByRole('button', { name: /entrar/i });
    await userEvent.type(email, 'viniciusjose@tryber.com');
    await userEvent.type(password, '123456');
    await userEvent.click(button);
    const plottedEmail = screen.getByTestId(/email-field/i);
    expect(plottedEmail).toBeVisible();
    expect(plottedEmail).toHaveTextContent(/viniciusjose@tryber.com/i);
  });
});
