import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit({
  handleShow,
  show,
  setShow,
  editTodo,
  setEditTodo,
  handleEditSave,
}) {
  const handleClose = () => setShow(false);
  console.log();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={editTodo.task}
            onChange={(e) =>
              setEditTodo((prev) => ({ ...prev, task: e.target.value }))
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {/* при изменении копируется значение предыдущего обьекта, и меняется поле таск на значение из инпута */}
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEditSave(editTodo);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
