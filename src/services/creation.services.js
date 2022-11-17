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


// const creationListService = () => {
//   return service.get("/creations")
// }


export {
    createCreationService,
    creationListService,
    creationDetailsService
}