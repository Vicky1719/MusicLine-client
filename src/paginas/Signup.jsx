import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services"

function Signup() {

  const navigate = useNavigate()

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState ("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleFirstnameChange = (e) => setFirstname(e.target.value);
  const handleLastnameChange = (e) => setLastname(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password
    }

    try {
      await signupService(newUser)
      navigate("/login")

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  };

  return (
    <div>
      <h1>Regístrate</h1>
      <form onSubmit={handleSignup}>
        <label>Nombre:</label>
        <input
          type="firstname"
          name="firstname"
          value={firstname}
          onChange={handleFirstnameChange}
        />

        <label>Apellidos: </label>
        <input
          type="lastname"
          name="lastname"
          value={lastname}
          onChange={handleLastnameChange}
        />

<label>Usuario: </label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign up</button>

        {errorMessage !== "" && <p>{errorMessage}</p>}

      </form>
    </div>
  );
}

export default Signup;