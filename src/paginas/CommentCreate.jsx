import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCommentService } from "../services/comment.services";
import IsPrivate from "./IsPrivate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CommentCreate(props) {
  const { creationId } = useParams();
  const navigate = useNavigate();
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleDescriptionChange = (event) =>
    setDescriptionInput(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newComments = {
      description: descriptionInput,
      creation: creationId,
    };
    try {
      await createCommentService(creationId, newComments);
      navigate(`/creation/${creationId}`);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="description"
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button type="submit">Comentar</Button>
      </Form>
    </div>
  );
}

export default CommentCreate;
