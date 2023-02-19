import React, { useReducer } from "react";
import "./index.css";

let initalState = 0;

// TODO : Order should be same for reducer and useReducer;

const reducer = (state, action) => {
  switch (action) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    case "reset":
      return initalState;
    default:
      return state;
  }
};

const UseReducerWithString = () => {
  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="useReducer_1">
      <h1>{count}</h1>
      <div>
        <button type="button" onClick={() => dispatch("plus")}>
          Increase
        </button>
        <button type="button" onClick={() => dispatch("reset")}>
          Reset
        </button>
        <button type="button" onClick={() => dispatch("minus")}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseReducerWithString;
