import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { commentEditService } from "../services/comment.services";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CommentEdit() {
  const { commentId } = useParams();
  const navigate = useNavigate();
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleDescriptionChange = (event) =>
    setDescriptionInput(event.target.value);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await commentEditService(commentId);
      setDescriptionInput(response.data.description);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newComment = {
      description: descriptionInput,
    };
    try {
      await commentEditService(commentId, newComment);
      navigate("/creation");
    } catch (error) {
      navigate(error);
    }
  };

  return (
    <div>
      <h3>Edita tu comentario</h3>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label htmlFor="description">Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="description"
            value={descriptionInput}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button type="submit">Comentar</Button>
      </Form>

      <Link to={`/creation/${commentId}/edit`}>
        <button>Editar</button>
      </Link>
      <Link to={`/creation/${commentId}/delete`}>
        <button>Borrar</button>
      </Link>
    </div>
  );
}

export default CommentEdit;
