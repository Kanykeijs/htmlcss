import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  async function addStudentTodo(newStudent) {
    let res = await axios.post("http://localhost:8000/students", newStudent);
    alert("Added succesfully!");
  }

  const handleSave = () => {
    let newObj = {
      name,
      img,
      created_at: Date.now(),
    };
    addStudentTodo(newObj);
    setImg("");
    setName("");
  };
  return (
    <div>
      <Form.Control
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <Form.Control
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="image"
      />
      <Button onClick={handleSave}>ADD</Button>
    </div>
  );
};

export default AddStudent;
