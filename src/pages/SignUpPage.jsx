import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from 'redux/authReducer';

const SingUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.currentTarget;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registerThunk(userData));
  };
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name..." />
        </label>
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
        <button>Sign Up</button>
      </form>
      <p>
        Already have an account? Then <Link to="/login/">log in</Link>!
      </p>
    </div>
  );
};

export default SingUpPage;
