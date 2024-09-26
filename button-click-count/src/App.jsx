import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  if (action == "add") {
    return state + 1;
  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>You clicked button {counter} times.</p>
      <button onClick={()=>{dispatch("add")}} style={{ backgroundColor: "red" }}>
        Count
      </button>
    </>
  );
}

export default App;
