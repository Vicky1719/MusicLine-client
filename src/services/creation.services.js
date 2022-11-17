import service from "./config.services";
import { useParams } from "react-router-dom"

const createCreationService = (newCreation) => {
  return service.post("/creation/create", newCreation)
}

const creationListService = () => {
  return service.get("/creation")
}


const creationDetailsService = (creationId) => {
   return service.get(`/creation/${creationId}/detail`)
 }


 const creationEditService = (creationId, creationUpdate) => {
   return service.patch(`/creation/${creationId}/edit`, creationUpdate)
 }


export {
    createCreationService,
    creationListService,
    creationDetailsService,
    creationEditService
}