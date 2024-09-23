import { useState } from "react";
import "./App.css";
import Home from "./Component/Home";

function App() {
  const [val, setVal] = useState("");

  const child2Parent = (data) => {
    setVal(data);
    console.log("child2parent data-->", data);
  };

  return (
    <>
      <p>Parent component---{val}</p>

      <Home child2Parent={child2Parent} />
    </>
  );
}

export default App;
