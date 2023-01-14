import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "./components/HomePage/HomePages";
import Users from "./components/Users/Users";
import AddStudent from "./components/AddStudent/AddStudent";
import StutentsList from "./components/StudentsList/StutentsList";
import StudentDetails from "./components/StudentDetails/StudentDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/students" element={<StutentsList />} />
      <Route path="/details/:id" element={<StudentDetails />} />
    </Routes>
  );
};

export default MainRoutes;
