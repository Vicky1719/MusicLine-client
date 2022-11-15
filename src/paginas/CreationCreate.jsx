// import React from 'react'
// import {useEffect} from 'react'
// import {useState} from 'react'
// import {useNavigate, useParams} from 'react-router-dom'
// import {useState, useContext, useEffect} from "react"
// import {createCreationService, creationListService} from '../services/creation.services'


// function CreationCreate() {
//   const [creationList, setCreationList] = useState([])

//   useEffect(() => {
//   getCreation()
//   }, [])

//   const getCreation = async () => {
//     try {
//         const response = await creationListService()
//         setCreationList(response.data)
//     }catch(error) {
//     }
//   }


//   return (
//     <div>
//         <h3>Nueva Creación</h3>
//         <form>
//             <label htmlFor="name">Nombre:</label>
//             <br />
//             <label htmlFor="description">Descripción:</label>
//             <br />
//             <label htmlFor="letter">Letra:</label>
// <br />
// <label htmlFor="sing">Música:</label>
// <br />
// <label htmlFor="song">Canción:</label>


            
//         </form>
//     </div>
//   )
// }

// export default CreationCreate