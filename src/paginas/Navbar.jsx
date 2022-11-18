import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { authenticatorUser, isLoggedIn, setUser, setIsLoggedIn } =
    useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticatorUser();
  };
  return (
    <div className="fondo">
      {isLoggedIn === true ? (
        <div className="inicio">
          <div className="inicio-menu">
            <NavLink to="/">Inicio</NavLink>
          </div>
          <div className="inicio-menu">
            <NavLink to="/profile">Perfil</NavLink>
          </div>
          <div className="inicio-menu">
            <NavLink to="/creation">Creaciones</NavLink>
          </div>
          <NavLink to="/">
            <button onClick={handleLogout}>Logout</button>
          </NavLink>
        </div>
      ) : (
        <div className="inicio">
          <div className="inicio-menu">
            <NavLink to="/">Inicio</NavLink>
          </div>
          <div className="inicio-menu">
            <NavLink to="/creation">Creaciones</NavLink>
          </div>
          <div className="inicio-menu">
            <NavLink to="/signup">Regístrate</NavLink>
          </div>
          <div className="inicio-menu">
            <NavLink to="/login">Accede</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
