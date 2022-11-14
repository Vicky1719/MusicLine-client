import service from "./config.services";
import { useParams } from "react-router-dom"

const createCreationService = (newCreation) => {
  return service.post("/creation/creationCreate", newCreation)
}

const creationListService = () => {
  return service.get("/creation")
}


export {
    createCreationService,
    creationListService
}