// import { useState } from "react";
import "./App.css";
import { useReducer } from "react";
import bothReducer from "./Reducer/bothReducer";

// Reducer function should be always a pure function. It should be written in global space.
// let reducer = (state, action) => {
//   if (action == "increment") return state + 1;
//   if (action == "decrement") return state - 1;
// };

function App() {
  let [state, dispatch] = useReducer(bothReducer, { value: 0 });
  //let [color, setColor] = useState("grey");

  // using 2 useState
  // let [value, setValue] = useState(0);
  // let [color, setColor] = useState("grey");
  return (
    <>
      <button
        className="div-green"
        onClick={
          () =>
            dispatch({
              type: "change-color",
              payload: "green",
            })
          // setColor("green")
        }
      >
        Change div color to Green
      </button>
      <br />
      <button
        className="add"
        onClick={() =>
          // setValue(value + 1)
          dispatch({
            type: "change-value",
            payload: 1,
          })
        }
      >
        Add value
      </button>
      <div className="hello" style={{ backgroundColor: state.color }}>
        <span style={{ color: "red" }}> {state.value} </span>
        <br />
      </div>
      <button
        className="sub"
        onClick={() =>
          //setValue(value - 1)
          dispatch({
            type: "change-value",
            payload: -1,
          })
        }
      >
        Subtract
      </button>
      <br />
      <button
        className="div-blue"
        onClick={
          () =>
            dispatch({
              type: "change-color",
              payload: "blue",
            })
          //setColor("blue")
        }
      >
        Change div color to Blue
      </button>
    </>
  );
}

export default App;
