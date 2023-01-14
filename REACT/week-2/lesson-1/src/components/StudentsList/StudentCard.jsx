import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ item, deleteStudent }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>JS27-Dream team</Card.Text>
        <Button
          onClick={() => navigate(`/details/${item.id}`)}
          variant="primary"
        >
          Go to details
        </Button>
        <Button onClick={() => deleteStudent(item.id)} variant="danger">
          Delete Student
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
