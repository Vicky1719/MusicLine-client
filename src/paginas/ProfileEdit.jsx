import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteProfileService, getProfileDetailsService, updateProfileService } from "../services/profile.services"

function Profile() {

  const navigate = useNavigate()

  const { userId } = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const [usernameInput, setUsernameInput] = useState("")
  const [firstnameInput, setFirstnameInput] = useState("")
  const [lastnameInput, setLastnameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await getProfileDetailsService()
      setDetails(response.data)
      setUsernameInput(response.data.username)
      setFirstnameInput(response.data.firstname)
      setLastnameInput(response.data.lastname)
      setEmailInput(response.data.email)
      setPasswordInput(response.data.password)
    
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }
  const handleUsernameChange = (event) => setUsernameInput(event.target.value)
  const handleFirstnameChange = (event) => setFirstnameInput(event.target.value)
  const handleLastnameChange = (event) => setLastnameInput(event.target.value)
   const handlePasswordChange = (event) => setPasswordInput(event.target.value)

  const handleUpdate = async (event) => {

  event.preventDefault()
  try {
    const updatedProfile = {
        username: usernameInput,
      firstname: firstnameInput, 
      lastname: lastnameInput,
      email: emailInput,
      password: passwordInput,
    }

  await updateProfileService(userId, updatedProfile)
  
  navigate("/profile")

  }catch(error) {
    navigate("/error")
  }

  }


  if (isFetching === true) {
    return <h3>...cargando</h3>
  }

  const handleDelete = async () => {
    try {
      await deleteProfileService()

      navigate("/profile")
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  return (
    <div>
      <h3> Hola! {details.firstname} </h3>
      <form>
      <label htmlFor="username">Usuario:</label>
      <input type="text" name="username" value={usernameInput} onChange={handleUsernameChange}></input>
      <br />
      <label htmlFor="firstname">Nombre:</label>
      <input type="text" name="firstname" value={firstnameInput} onChange={handleFirstnameChange}></input>
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastname" value={lastnameInput} onChange={handleLastnameChange}></input>
      <br />
      <label htmlFor="password">Contraseña:</label>
      <input type="text" name="password" onChange={handlePasswordChange}></input>
      <br /> 
      
      <button onClick={handleUpdate}>Actualizar</button>
      </form>
      <div>

        <button onClick={handleDelete}>Borrar</button>
        
      </div>
    </div>
  )
}

export default Profile