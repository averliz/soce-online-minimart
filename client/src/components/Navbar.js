import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ authToken, setAuthToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    setAuthToken(localStorage.getItem("x-auth-token"));
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Uncle's Online Minimart
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                exact="true"
                to="/"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/categories"
              >
                Categories
              </NavLink>
            </li>
            {!authToken && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
            {authToken && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/admin"
                >
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
          {authToken && (
            <form className="d-flex" style={{ padding: 0 }}>
              <button
                className="btn btn-secondary my-2 my-sm-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
