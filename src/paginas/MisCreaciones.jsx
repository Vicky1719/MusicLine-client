import React from 'react'
import {userCreationService} from "../services/profile.services"
import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"


function MyCreations() {
  const navigate = useNavigate()
  

  const [creation, setCreation] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getData()
    }, [])

    const getData = async (event) => {
    
      try {
        const response = await userCreationService()
        console.log(response)
        setCreation(response.data)
        setIsFetching(false)
      }catch(error) {
        navigate("/error")
      }
    }
  
    if (isFetching === true) {
      return <h3>...searching</h3>
    }

  return (
    <div>
         {creation.map((eachCreation) => {
        return (
         <p key={eachCreation._id}>
      <><h3>{eachCreation.name} </h3>
     
      </>
      </p>
        )
      })}
    </div>
  )
}

export default MyCreations