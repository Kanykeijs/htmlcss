import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import UserCard from "../UserCard/UserCard";

const EditStudentModal = ({ show, setShow, getOneStudent, oneStudent }) => {
  const handleClose = () => setShow(false);

  const [user, setUser] = useState(oneStudent);
  useEffect(() => {}, [oneStudent]);

  const params = useParams();

  //console.log(params);

  const handleSave = () => {
    editStudents(user, params.id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          style={{ width: "15vw", marginLeft: "20%" }}
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          style={{ width: "15vw", marginLeft: "20%" }}
          placeholder="image"
          value={user.img}
          onChange={(e) => setUser({ ...user, img: e.target.value })}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditStudentModal;
