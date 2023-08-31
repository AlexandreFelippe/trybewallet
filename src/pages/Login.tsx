import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitUser } from '../redux/actions';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [login, setLogin] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = login;

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });
  }
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    dispatch(submitUser(email));
    navigate('/carteira');
  }

  return (
    <div>
      <h1>TRYBE WALLET</h1>
      <form>
        <label htmlFor="">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            required
            onChange={ handleChange }
          />
        </label>
        <label>
          Senha:
          <input
            data-testid="password-input"
            value={ password }
            type="password"
            name="password"
            required
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          onClick={ handleSubmit }
          disabled={ !(/^\S+@\S+\.\S+$/i.test(email) && password.length > 5) }
        >
          Entrar

        </button>
      </form>
    </div>
  );
}

export default Login;
