import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthAuthenticated } from "redux/auth.selectors";

const HomePage = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <div>
      <h1>Welcome to Phone Book!</h1>
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
    </div>
  );
};

export default HomePage;
