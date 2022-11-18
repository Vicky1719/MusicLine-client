import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getProfileDetailsService } from "../services/profile.services"
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'


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
    return  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }

  
  return (
    <div className='fondo'>
      < Card body style={{backgroundColor:"lightblue"}}><h3>Hola! {details.username} </h3>
      <p>Nombre: {details.firstname}</p>
      <p>Apellidos: {details.lastname}</p></Card>
     

      <Link to={"/profile/edit"}><button>Editar</button></Link>
      <Link to={"/profile/new-creation"}><button>Crea una nueva creación</button></Link>
      <Link to={"/profile/my-creation"}><button>Mis creaciones</button></Link>
    </div>
  )
}
export default Profile