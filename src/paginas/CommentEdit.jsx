import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams, Link } from 'react-router-dom'
import { commentEditService} from '../services/comment.services'


function CommentEdit() {
    const { commentId } = useParams()
  const navigate = useNavigate()
    const [descriptionInput, setDescriptionInput] = useState("")
    
    
  
    const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
    
   
    useEffect(() => {
        
        getData()
       },[])
       const getData = async () => {

        try {
    const response = await commentEditService(commentId)
          console.log("osokandonsadksandoka", response)
    setDescriptionInput(response.data.description)
    

        } catch (error) {
          navigate("/error")
        }
       }
    
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const newComment= {
      
      description: descriptionInput,
      
      
    }
    try {
      await commentEditService(commentId, newComment)
      navigate("/creation")
      
    } catch(error) {
      navigate(error)
    }
  }


  return (
    <div>
        <h3>Edita tu comentario</h3>
        <form>
           
            <label htmlFor="description">Descripción:</label>
            <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
            <br />
            
            <Link to={`/creation/${commentId}/edit`}><button>Editar</button></Link>
            <Link to= {`/creation/${commentId}/delete`}><button>Borrar</button></Link>


            

        </form>
    </div>
  )
}


export default CommentEdit