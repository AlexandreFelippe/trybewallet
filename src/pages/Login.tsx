import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitUser } from '../redux/actions';
import styles from './Login.module.css';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const rootState = useSelector((state) => state);
  console.log(rootState);
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
    <div className={ styles.container }>
      <h1>TRYBE WALLET</h1>
      <form className="{ styles.form }">
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
