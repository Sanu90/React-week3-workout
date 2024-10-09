import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);
  }, [timer]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {timer.toLocaleDateString() +
            " " +
            timer.toLocaleTimeString("ind", { hour12: false })}
        </p>
      </header>
    </div>
  );
}

export default App;
