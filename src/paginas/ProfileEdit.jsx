import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteProfileService, getProfileDetailsService, updateProfileService } from "../services/profile.services"
import {AuthContext} from "../context/auth.context"

function Profile() {
const {user} = useContext(AuthContext)
const userId = user.user._id
const navigate = useNavigate()

 // const { userId } = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const [usernameInput, setUsernameInput] = useState("")
  const [firstnameInput, setFirstnameInput] = useState("")
  const [lastnameInput, setLastnameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")


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
    
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }
  const handleUsernameChange = (event) => setUsernameInput(event.target.value)
  const handleFirstnameChange = (event) => setFirstnameInput(event.target.value)
  const handleLastnameChange = (event) => setLastnameInput(event.target.value)
  const handleEmailChange = (event) => setEmailInput(event.target.value)


  const handleUpdate = async (event) => {

    event.preventDefault()
    const updatedProfile = {
        username: usernameInput,
      firstname: firstnameInput, 
      lastname: lastnameInput,
      email: emailInput
    }
    
    try {
  await updateProfileService(userId, updatedProfile)
  
  navigate("/profile")

  }catch(error) {
    navigate("/error")
  }

  }
console.log("hola", user.user._id)

  if (isFetching === true) {
    return <h3>...cargando</h3>
  }

  const handleDelete = async () => {
    try {
      await deleteProfileService(userId)

      navigate("/")
    } catch (error) {
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
      <label htmlFor="lastName">Apellidos:</label>
      <input type="text" name="lastname" value={lastnameInput} onChange={handleLastnameChange}></input>
      <br />
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" value={emailInput} onChange={handleEmailChange}></input>
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