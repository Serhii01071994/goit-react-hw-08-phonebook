import { StyledHomePage } from "components/App.styled";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthAuthenticated } from "redux/auth.selectors";

const HomePage = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledHomePage>
      <h1 className="home-title">Welcome to Phone Book!</h1>
      <div className="links">
        {authenticated && (
          <NavLink className="link" to="/contacts/">
            Your contact list
          </NavLink>
        )}
        {!authenticated && (
          <>
            <NavLink to="/login/" className="link">
              Enter
            </NavLink>
            <NavLink to="/register/" className="link">
              Create an account
            </NavLink>
          </>
        )}
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
