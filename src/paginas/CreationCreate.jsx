import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createCreationService, creationListService} from '../services/creation.services'


function CreationCreate() {
  const [creationList, setCreationList] = useState([])

  useEffect(() => {
  getCreation()
  }, [])

  const getCreation = async () => {
    try {
        const response = await creationListService()
        setCreationList(response.data)
    }catch(error) {
    }
  }


  return (
    <div>
        <h3>Haz tu creación</h3>
        <form>
            <label htmlFor="name">Nombre:</label>
            <br />
            <label htmlFor="description">Description:</label>
            <label htmlFor="letter">Letter:</label>
            <label htmlFor="sing">Música:</label>
            <label htmlFor="song">Canción:</label>


        
        </form>
    </div>
  )
}

export default CreationCreate