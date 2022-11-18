import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { creationDetailsService, creationDeleteService } from "../services/creation.services";
import { commentAddService } from "../services/comment.services";
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";


function CreationDetail() {
  const navigate = useNavigate();
  const { creationId } = useParams();
  const [isFetching, setIsFetching] = useState(true);
  const [creationDetail, setCreationDetails] = useState("");
  const [creationComment, setCreationComment] = useState([]);

  useEffect(() => {
    getCommentAdd();
  }, []);

  const getCommentAdd = async () => {
    try {
      const response2 = await creationDetailsService(creationId);
      setCreationDetails(response2.data);
      console.log("vieira", response2.data)
      const response = await commentAddService(creationId);
      setCreationComment(response.data);
      console.log("hola", response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleDelete = async () => {

    try {

      await creationDeleteService(creationId)

      navigate("/profile/my-creation")
      
    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  }

  if (isFetching === true) {
    return <h3>...buscando</h3>;
  }

  return (
    <div>
      <h2>Detalles</h2>
      <p>Nombre: {creationDetail.name}</p>
      <p>Descripción: {creationDetail.description}</p>
      <p>Letra: {creationDetail.letter}</p>
      <p>Música: {creationDetail.sing}</p>
      <p>Canción: {creationDetail.song}</p>
      {creationComment !== undefined && (
        <p>
          Comentarios:{" "}
          {creationComment.map((eachComment) => {
            return <p>{eachComment.description}</p>
          })}
        </p>
      )}

      <Link to={`/creation/${creationId}/edit`}>Editar</Link>

      
        <button onClick={handleDelete}>Borrar</button>
      


      <Link to={`/creation/${creationId}/comment`}>
        <button>Añadir comentario</button>
      </Link>
    </div>
  );

}

export default CreationDetail;