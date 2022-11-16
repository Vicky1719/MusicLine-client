import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteProfileService, getProfileDetailsService, updateProfileService } from "../services/profile.services"

function Profile() {

  const navigate = useNavigate()

  const { userId } = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await getProfileDetailsService()
      setDetails(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }


  if (isFetching === true) {
    return <h3>...searching</h3>
  }

  const handleDelete = async () => {
    try {
      await deleteProfileService(userId)

      navigate("/profile")
    } catch (error) {
      navigate("/error")
    }
  }

  return (
    <div>
      <h3>Hola! {details.username} </h3>
      <p>Nombre: {details.firstname}</p>
      <p>Apellidos: {details.lastname}</p>
    

    <button onClick={handleDelete}>Borrar</button>
      <Link to={"/profile/edit"}><button>Actualizar</button></Link>
      <Link to={"/profile/new-creation"}><button>Crea una nueva creación</button></Link>

   
      <div>

        
      </div>
    </div>
  )
}
export default Profile