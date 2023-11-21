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
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" placeholder="exemple@mail.com" />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Your password..."
          />
        </label>
        <button>Log In</button>
      </form>
      <p>
        Don't have an account? Then <Link to="/register/">sign up</Link>!
      </p>
    </div>
  );
};

export default LoginPage;
