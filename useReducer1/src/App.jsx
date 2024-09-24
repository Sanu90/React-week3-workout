// import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

function reducer(state, action) {
  if (action === "decrement") {
    if(state==0) return 0;
    return state - 1;
  } 
  
  if (action === "increment"){
    return state + 1;
  }
}

function App() {
  // let [count, setCount] = useState(0);

  let [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Counter</h1>
      <br />
      <h4>Value is: {count}</h4>
      <button
        // onClick={() => setCount(count + 1)}
        onClick={() => dispatch("increment")}
        style={{ color: "white", backgroundColor: "grey" }}
      >
        Add
      </button>{" "}
      <button
        // onClick={() => count > 0 && setCount(count - 1)}
        onClick={() => dispatch("decrement")}
        style={{ color: "white", backgroundColor: "grey" }}
      >
        Subtract
      </button>
    </>
  );
}

export default App;
