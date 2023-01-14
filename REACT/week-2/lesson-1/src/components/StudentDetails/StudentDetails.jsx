import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import EditStudentModal from "./EditStudentModal";

const StudentDetails = () => {
  const [oneStudent, setOneStudent] = useState({});

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const params = useParams();
  console.log(params);
  async function getOneStudent(id) {
    try {
      let res = await axios(`http://localhost:8000/students/${id}`);
      //console.log(res);
      setOneStudent(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function editStudent(newObj, id) {
    let res = await axios.patch(`http://localhost:8000/students/${id}`, newObj);
    getOneStudent(id);
  }

  useEffect(() => {
    getOneStudent(params.id);
  }, []);

  console.log(oneStudent, "oneStudent");

  return (
    <div>
      <h2>{oneStudent.name}</h2>
      <img width="300px" src={oneStudent.img} alt="" />
      <button onClick={handleShow}>Edit</button>
      <EditStudentModal
        show={show}
        setShow={setShow}
        oneStudent={oneStudent}
        setOneStudent={setOneStudent}
        editStudent={editStudent}
        getOneStudent={getOneStudent}
      />
    </div>
  );
};

export default StudentDetails;
