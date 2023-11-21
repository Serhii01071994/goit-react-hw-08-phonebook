import { StyledNavLink } from 'components/App.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated, selectAuthUserData,  } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';


export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
//   const user = useSelector(selectAuthUserData);
// const dispatch = useDispatch();
   
  //  const onLogOut = () => {
  //    dispatch(logOutThunk());
  //  };
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
           <UserMenu/>
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
