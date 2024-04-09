import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fillUser, incrementByAmount } from "./store/userSlice";

function App() {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.user_state.value);
  const user = useSelector((state) => state.user_state.user);

  const dispatch = useDispatch();

  console.log("user", user);

  const handleFillUser = () => {
    const res = {
      name: "John",
      age: 33,
    };

    dispatch(fillUser(res));
  };

  const handleStoreCount = () => {
    // const forDispatchObj = incrementByAmount(19);

    // console.log("forDispatchObj", forDispatchObj);
    // dispatch(forDispatchObj);

    dispatch(incrementByAmount(19));
    // dispatch(addTodo({
    //   id:"dsadas",
    //   title:"sadasdas",
    //   completed:false
    // }));

    // dispatch({type:"MY_TYPE",payload:12})
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={handleFillUser}>Fill user</button>
        <button onClick={handleStoreCount}> Click event</button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
