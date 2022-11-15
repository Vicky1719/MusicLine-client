import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"

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
          <NavLink to="/creaciones">Creaciones</NavLink>

          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/creaciones">Creaciones</NavLink>
          <NavLink to="/signup">Regístrate</NavLink>
          <NavLink to="/login">Accede</NavLink>
        </div>
      )
      }
    </div>

  )
}
export default Navbar