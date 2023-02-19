import React, { useReducer } from "react";

const initalState = { addCount: 0, secondCount: 10 };

const reducer = (state, action) => {
  switch (action.type) {
    /**
     * * Disptach method objects is used in "Action"
     */
    case "plus":
      return { ...state, addCount: state.addCount + action.value };
    case "minus":
      return { ...state, addCount: state.addCount - action.value };
    case "plus1":
      return { ...state, secondCount: state.secondCount + action.value };
    case "minus1":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return initalState;
    default:
      return state;
  }
};

/**
 * ! Note : If there are more than one state use spread Operator to get the all states in reducer funtion
 * ! other wise the other states won't present.
 *
 */

const UseReducerWithComplexState = () => {
  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      {/* counter 1 */}

      <div className="useReducer_1">
        <h1>Counter 1</h1>
        <h1>{count.addCount}</h1>
        <div>
          <button
            type="button"
            onClick={() => dispatch({ type: "plus", value: 1 })}
          >
            Increase
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "plus", value: 5 })}
          >
            Increase +5
          </button>
          <button type="button" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "minus", value: 5 })}
          >
            Decrease -5
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "minus", value: 1 })}
          >
            Decrease
          </button>
        </div>
        <p>Scroll Below</p>
      </div>
      {/* counter 2 */}
      <div className="useReducer_1">
        <h1>Counter 2</h1>
        <h1>{count.secondCount}</h1>
        <div>
          <button
            type="button"
            onClick={() => dispatch({ type: "plus1", value: 1 })}
          >
            Increase
          </button>
          <button type="button" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "minus1", value: 1 })}
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducerWithComplexState;

/**
 * TODO : If we want two counter with same functionality but with different state
 * * Use two reducer Funtion for those.
 * i.e;
 *
 * const [countOne,disptachone] = useReducer(intialState,reducer),
 * const [countTwo,disptachTwo] = useReducer(intialState,reducer),
 *
 * * In the above case countOne and countTwo are two independent states with same initalState and reducer.
 * ! The use of above case is we can prevent rewritting reducer funtion for secondCounter
 */
