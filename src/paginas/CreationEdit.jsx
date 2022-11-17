import React from 'react'
import navigate from "react"
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { creationDetailsService, creationEditService} from '../services/creation.services'


function CreationEdit() {
    const { creationId } = useParams()
    console.log("lolita", creationId)
  const navigate = useNavigate()
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
   
    useEffect(() => {
        
        getData()
       },[])
       const getData = async () => {

        try {
    const response = await creationDetailsService(creationId)
          console.log("osokandonsadksandoka", response)
    setNameInput(response.data.name)
    setDescriptionInput(response.data.description)
    setLetterInput(response.data.letter)
     setMusicInput(response.data.music)
    setSongInput(response.data.song)

        } catch (error) {
          navigate("/error")
        }
       }
    
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const newCreation= {
      name: nameInput,
      description: descriptionInput,
      letterr: letterInput,
      music: musicInput,
      song: songInput,
      
    }
    try {
      await creationEditService(creationId, newCreation)
      navigate("/creation")
      
    } catch(error) {
      navigate(error)
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
           
            <button onClick={handleSubmit}>Editar</button>
        </form>
    </div>
  )
}


export default CreationEdit