import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom"
import { creationDetailsService } from '../services/creation.services'



function CreationDetail() {
  const navigate = useNavigate()
  const {creationId} = useParams ()
const [isFetching, setIsFetching ] = useState(true)
const [creationDetail, setCreationDetails ] = useState(null)

useEffect(() => {
  getDetailsCreation()
}, [])


const getDetailsCreation = async () => {
  try {
    const response = await creationDetailsService(creationId)
  setCreationDetails(response.data)
  setIsFetching(false)
  }catch(error){
navigate("/error")
  }
  
  }


  if ( isFetching === true) {
    return (
      <h3>...buscando</h3>
    )
  }





  return (
    <div>
      <h2>Detalles</h2>
      <p>Nombre: {creationDetail.name}</p>
      <p>Descripción: {creationDetail.description}</p>
      <p>Letra: {creationDetail.letter}</p>
      <p>Música: {creationDetail.sing}</p>
      <p>Canción: {creationDetail.song}</p>



      <Link to={`/creation/${creationId}/edit`}><button>Editar</button></Link>
      <Link to="/creation/delete"><button>Borrar</button></Link>
      <Link to="/creation/comment"><button>Añadir comentario</button></Link>
    </div>
  )
}

export default CreationDetail