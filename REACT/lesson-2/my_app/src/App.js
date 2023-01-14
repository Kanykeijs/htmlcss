import React, { useState } from "react";
import NavbarCustom from "./navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // const [state, setState] = useState("START");

  // console.log(state);
  //state=1
  const [counter, setCounter] = useState(1);
  console.log(counter);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const students = ["Nurdan", "Timur", "Akim"];
  const group = "JS27";

  return (
    <div>
      <NavbarCustom students={students} group={group} />
      <button onClick={handlePlus}>+</button>
      {counter}
      <button onClick={() => setCounter(counter - 1)}>-</button>

      {/* <button onClick={() => setState("CHANGED")}>CHANGE STATE</button> */}
    </div>
  );
};

export default App;
