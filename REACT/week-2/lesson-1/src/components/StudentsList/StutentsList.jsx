import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
//http://localhost:8000/students

const StutentsList = () => {
  const [students, setStudents] = useState([]);
  const getStudents = async () => {
    try {
      let { data } = await axios("http://localhost:8000/students");
      console.log(data);
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStudent = async (id) => {
    let res = await axios.delete(`http://localhost:8000/students/${id}`);
    getStudents();
  };

  useEffect(() => {
    getStudents();
  }, []);

  console.log(students);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {students.map((item) => (
        <StudentCard deleteStudent={deleteStudent} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StutentsList;
