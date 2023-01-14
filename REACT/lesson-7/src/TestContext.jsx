import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const testContext = createContext();

export const useTest = () => {
  return useContext(testContext);
};

const TestContext = ({ children }) => {
  const arrName = ["Said", "Mustafa", "Kanai", "Samat"];

  const value = {
    arrName,
  };

  return <testContext.Provider value={value}>{children}</testContext.Provider>;
};

export default TestContext;
