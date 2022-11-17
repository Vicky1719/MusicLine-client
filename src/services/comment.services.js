import service from "./config.services";
import { useParams } from "react-router-dom"

const createCommentService = (creationId, newComments) => {
  console.log("lata",`/creation/${creationId}/comment`)
  return service.post(`/creation/${creationId}/comment`, newComments)
 
}

 const commentAddService = (creationId) => {
   return service.get(`/creation/${creationId}/comment`)
 }





const commentEditService = (commentId, creationUpdate) => {
   return service.patch(`/creation/${commentId}/edit`, creationUpdate)
 }


 
export {

    createCommentService,
    commentEditService,
    commentAddService
}