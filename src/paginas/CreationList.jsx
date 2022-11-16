import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {creationListService} from "../services/creation.services"


function CreationList() {
    const navigate = useNavigate()


    const [list, setList] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
    getCreationList()
    }, [])

  const getCreationList = async () => {
    try {
      const response = await creationListService()
      setList(response.data)
      setIsFetching(false)

    } catch(error) {
    }
  }

  if (isFetching === true) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
        

        {list.map((eachCreation) => {
            return (
                <p key={eachCreation._id}>
                    <Link to={`/creation/${eachCreation._id}`}>
                      <h4>{eachCreation.name}</h4>
                      </Link>
                      
                    
                </p>
            )
        })}

    </div>
  )
}

export default CreationList

