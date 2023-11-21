import { StyledNavLink } from 'components/App.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated,  } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';


export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectAuthAuthenticated);
const dispatch = useDispatch();
   
   const onLogOut = () => {
     dispatch(logOutThunk());
   };
  return (
    <header>
      <nav>
        <StyledNavLink className="header-link" to="/">
          Home
        </StyledNavLink>
        {authenticated ? (
          <>
            <StyledNavLink className="header-link" to="/contacts">
              Contacts
            </StyledNavLink>
            <div>
              <p>Welcome, {user.mail}</p>
              <button onClick={onLogOut}>
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <StyledNavLink className="header-link" to="/login">
              Login
            </StyledNavLink>
            <StyledNavLink className="header-link" to="/register">
              Register
            </StyledNavLink>
          </>
        )}
      </nav>
    </header>
  );
};
