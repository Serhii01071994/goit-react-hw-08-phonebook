import { StyledNavLink } from "components/App.styled";
import { useSelector } from "react-redux";
import { selectAuthAuthenticated } from "redux/auth.selectors";

export const Navigation = () => {
    const authenticated = useSelector(selectAuthAuthenticated);
    return (
      <header>
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/contacts">
            Contacts
          </StyledNavLink>
          {authenticated ? (
            <>
              <StyledNavLink className="header-link" to="/contacts">
                Contacts
              </StyledNavLink>
              <button>Log Out</button>
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
}