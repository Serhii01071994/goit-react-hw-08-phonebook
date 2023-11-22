import { StyledNavLink } from 'components/App.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <header className="header">
      <nav className="navigation">
        <StyledNavLink to="/">Home</StyledNavLink>
        {authenticated ? (
          <>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            
            <UserMenu />
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </nav>
    </header>
  );
};
