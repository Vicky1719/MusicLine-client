import React from 'react'
import navigate from "react"
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createCommentService} from '../services/creation.services'
import IsPrivate from './IsPrivate'


function CommentCreate(props)  {
  
 
  const [descriptionInput, setDescriptionInput] = useState("")
 

  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
 
 

const handleSubmit = async (event) => {
  event.preventDefault()
  const newComment= {
 
    description: descriptionInput,
   
    
  }
  try {
    await createCommentService( newComment)
    navigate("/profile")
    
  } catch(error) {
    console.log(error)
  }
}



  return (
    <div>
        <h3>Añade un comentario</h3>
        <form>
            
            <label htmlFor="description">Descripción:</label>
            <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
            <br />
            
           
            <button onClick={handleSubmit}>Comentar</button>
        </form>
    </div>
  )
}



export default CommentCreate