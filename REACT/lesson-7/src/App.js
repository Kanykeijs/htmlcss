import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import DataEarm from "./components/DataEarm";
import TestContext from "./TestContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const postUser = async () => {
    await axios.post("http://localhost:8000/users", user);
  };
  // INIT_STATE hraniliwe steitov (dannyh)
  const INIT_STATE = {
    users: [],
    userDetail: {},
  };
  // funksiya reducer (kotoraya budet pomewat dannye v INIT_STATE)
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "USERS":
        return { ...state, users: action.payload };
      case "USER_DETAIL":
        return { ...state, userDetail: action.payload };
      default:
        return state;
    }
  };

  const getUsers = async () => {
    const { data } = await axios("http://localhost:8000/users");
    //dispet$er, kotoryi otpravlyaet kuda i wto polojit
    console.log(data);
    let action = {
      type: "USERS",
      payload: data,
    };
    dispatch(action);
  };

  const getUserDetail = async () => {
    const { data } = await axios("http://localhost:8000/users/6");
    console.log(data);
    dispatch({
      type: "USER_DETAIL",
      payload: data,
    });
  };
  useEffect(() => {
    getUsers();
    getUserDetail();
  }, []);

  const [state, dispatch] = useReducer(reducer, INIT_STATE); //sozdaem inicializiruem user

  //console.log(state);

  return (
    <>
      <TestContext>
        <DataEarm />
        <input
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          placeholder="last name"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <button onClick={postUser}>post</button>
      </TestContext>
    </>
  );
}

export default App;
