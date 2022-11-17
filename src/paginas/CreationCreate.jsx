import React from 'react'
import navigate from "react"
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createCreationService} from '../services/creation.services'


function CreationCreate(props) {
  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [letterInput, setLetterInput] = useState()
  const [musicInput, setMusicInput] = useState("")
  const [songInput, setSongInput] = useState("")
  

  const handleNameChange = (event) => setNameInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleLetterChange = (event) => setLetterInput(event.target.value)
  const handleMusicChange = (event) => setMusicInput(event.target.value)
  const handleSongChange = (event) => setSongInput(event.target.value)
 

const handleSubmit = async (event) => {
  
  const newCreation= {
    name: nameInput,
    description: descriptionInput,
    letterr: letterInput,
    music: musicInput,
    song: songInput,
    
  }
  try {
    await createCreationService(newCreation)
    navigate("/profile")
    
  } catch(error) {
    console.log(error)
  }
}



  return (
    <div>
        <h3>Crea tu nueva creración</h3>
        <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" value={nameInput} onChange={handleNameChange} />
            <br />
            <label htmlFor="description">Descripción:</label>
            <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
            <br />
            <label htmlFor="letter">Letra de la creación:</label>
            <input type="text" name="letter" value={letterInput} onChange={handleLetterChange} />
            <br />
            <label htmlFor="music">Música:</label>
            <input type="text" name="music" value={musicInput} onChange={handleMusicChange} />
            <br />
            <label htmlFor="song">Canción:</label>
            <input type="text" name="song" value={songInput} onChange={handleSongChange} />
            <br />
           
            <button onClick={handleSubmit}>Crea</button>
        </form>
    </div>
  )
}

export default CreationCreate