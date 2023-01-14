import React from "react";
import Data from "./components/data";

const App = () => {
  console.log("JSJSJS27");
  let arr = ["Neimar", "Messi", "SIUU"];

  const getInfo = (data) => {
    return console.log(data);
  };
  return (
    <div>
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
      <Data />
    </div>
  );
};
export default App;

const getInfo = (data) => {
  return console.log(data);
};

return (
  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
    {arr.map((item, index) => {
      return (
        <div>
          <Data key={index} />
          {item}
        </div>
      );
    })}
  </div>
);
export default App;