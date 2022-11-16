import service from "./config.services";
import { useParams } from "react-router-dom"

const createCreationService = (newCreation) => {
  return service.post("/creation/creationCreate", newCreation)
}

const creationListService = () => {
  return service.get("/creation")
}


const creationDetailsService = () => {
   return service.get("/creation")
 }


// const creationListService = () => {
//   return service.get("/creations")
// }


export {
    createCreationService,
    creationListService,
    creationDetailsService
}