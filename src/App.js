import React from "react";
import "./App.css";
import Usecontext from "./UseContext/Usecontext";
import UseReducerWithString from "./UseReducer/UseReducer";
import UseReducerWithComplexState from "./UseReducer/UseReducerWithComplexState";

// export const LastName = React.createContext();
// export const FirstName = React.createContext();/**code for use context */
// export const OtherDetails = React.createContext();

function App() {
  return (
    <div>
      {/* <UseReducerWithString /> */}
      <UseReducerWithComplexState />
    </div>
  );
}

export default App;

/**
 * TODO: USE CONTEXT
 *   @returnCode
 *    <FirstName.Provider value={"santhosh"}>
      <LastName.Provider value={"veluru"}>
        <OtherDetails.Provider
          value={{ age: 25, sex: "male", country: "India" }}
        >
          <Usecontext />
        </OtherDetails.Provider>
      </LastName.Provider>
    </FirstName.Provider>
 * 
 */
