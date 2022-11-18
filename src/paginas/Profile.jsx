import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getProfileDetailsService } from "../services/profile.services"
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";


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

  
  return (
    <div>
      <h3>Hola! {details.username} </h3>
      <p>Nombre: {details.firstname}</p>
      <p>Apellidos: {details.lastname}</p>
     

      <Link to={"/profile/edit"}><button>Editar</button></Link>
      <Link to={"/profile/new-creation"}><button>Crea una nueva creación</button></Link>
      <Link to={"/profile/my-creation"}><button>Mis creaciones</button></Link>
    </div>
  )
}
export default Profile