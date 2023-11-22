import { StyledSignUp } from 'components/App.styled';
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
    <StyledSignUp>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your name..."
          />
        </label>
        <label className="label">
          Email
          <input
            className="input"
            type="email"
            name="email"
            placeholder="exemple@mail.com"
          />
        </label>
        <label className='label'>
          Password
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Your password..."
          />
        </label>
        <button className='login'>Sign Up</button>
      </form>
      <p>
        Already have an account? Then <Link to="/login/">log in</Link>!
      </p>
    </StyledSignUp>
  );
};

export default SingUpPage;
