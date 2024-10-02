import "./App.css";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const value = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();
  // console.log("Value is", value);

  return (
    <>
      <h2>Redux Store</h2>
      <button
        style={{ borderColor: "black" }}
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Increment
      </button>

      <p>Value is: {value}</p>
      <button
        style={{ borderColor: "black" }}
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
