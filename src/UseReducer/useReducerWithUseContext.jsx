import React, { useReducer } from "react";

/**
 *  * Use Reducer with use context is used when we need to maintain state in parent File and
 * * those states are passed as props to the child components using useContext Hook.
 *
 *! In below example the count value is shared to child componets (state management Globally)
 *  */
export const CountContext = React.createContext();

let initalState = 0;

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

function useReducerWithUseContext() {
  const [count, dispatch] = useReducer(reducer, initalState);
  // Context syntax for provider to pass the state to child
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <h1>Count : {count}</h1>
        {/* <ComponentA/> */}
        {/* <ComponentB/> */}
        {/* <ComponentC/> */}
      </div>
      ;
    </CountContext.Provider>
  );
}

export default useReducerWithUseContext;

/**
 * ! In componentA (Say it consumes the context context of useReducerWithUseContext)
 * * Code will be
 * 
 * ? import React, { useContext } from "react";
 * ? import {CountContext} from './useReducerWithUseContext'
 * 
 * ? const ComponentA = () => {
 * ? const countContext = useContext(countContext);
 * ? return (
 * ?   <div className="useReducer_1">
 * ?   <h1>ComponentA</h1>
 * ?   <div>
 * ?     <button type="button" onClick={() => countContext.countDispatch("plus")}>
 * ?       Increase
 * ?     </button>
 * ?     <button type="button" onClick={() => countContext.countDispatch("reset")}>
 * ?       Reset
 * ?     </button>
 * ?     <button type="button" onClick={() => countContext.countDispatch("minus")}>
 * ?       Decrease
 * ?     </button>
 * ?   </div>
 * ? </div>
 * ? )};
* ? export default ComponentA;


*! In above 'countDisptach is the method provided in context in parent file.
 */
