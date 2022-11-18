import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createCommentService} from '../services/comment.services'
import IsPrivate from './IsPrivate'


function CommentCreate(props)  {
  const {creationId} = useParams()
  const navigate = useNavigate()
  const [descriptionInput, setDescriptionInput] = useState("")
 

  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
 
 

const handleSubmit = async (event) => {
  event.preventDefault()
  
  const newComments= {
 
    description: descriptionInput,
    creation: creationId

   
    
  }
  try {
    await createCommentService( creationId, newComments)
    console.log("casa", newComments)
    navigate(`/creation/${creationId}`)
    
  } catch(error) {
    navigate("/error")
  }
}



  return (
    <div>
        <h3>Añade un comentario</h3>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="description">Descripción:</label>
            <input type="text" name="description" onChange={handleDescriptionChange} />
            <br />
            
           
            <button type="submit">Comentar</button>
        </form>
    </div>
  )
}



export default CommentCreate