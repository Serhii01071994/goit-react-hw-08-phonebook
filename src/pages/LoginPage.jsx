import { StyledLoginPage } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'redux/authReducer';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    const userData = {
      email: email.value,
      password: password.value,
    };
    dispatch(loginThunk(userData));
  };

  return (
    <StyledLoginPage>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Email
          <input className='input' type="email" name="email" placeholder="exemple@mail.com" />
        </label>
        <label className="label">
          Password
          <input
            className='input'
            type="password"
            name="password"
            placeholder="Your password..."
          />
        </label>
        <button className='login'>Log In</button>
      </form>
      <p>
        Don't have an account? Then <Link to="/register/">sign up</Link>!
      </p>
    </StyledLoginPage>
  );
};

export default LoginPage;
