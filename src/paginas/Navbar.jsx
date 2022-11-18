import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";


function Navbar() {

  const { authenticatorUser, isLoggedIn, setUser, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticatorUser()
  }
  return (
    <div>
      {isLoggedIn === true ? (
        <div>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/profile">Perfil</NavLink>
          <NavLink to="/creation">Creaciones</NavLink>

          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/creation">Creaciones</NavLink>
          <NavLink to="/signup">Regístrate</NavLink>
          <NavLink to="/login">Accede</NavLink>
        </div>
      )
      }
    </div>

  )
}
export default Navbar