import React from "react";
import "./App.css";
import UseDocumentTitle from "./CustomHooks/useDocumentTitle";
import Usecontext from "./UseContext/Usecontext";
import UseMemoIntro from "./UseMemo/UseMemoIntro";
import FetchingUsingUseReducerPart1 from "./UseReducer/FetchingUsingUseReducer";
import FetchingUsingUseReducerPart2 from "./UseReducer/FetchingUsingUseReducerPart2";
import UseReducerWithString from "./UseReducer/UseReducer";
import UseReducerWithComplexState from "./UseReducer/UseReducerWithComplexState";
import UseRef1 from "./UseRef/UseRef1";
import UseRef2, { UseRef2Class } from "./UseRef/UseRef2";

// export const LastName = React.createContext();
// export const FirstName = React.createContext();/**code for use context */
// export const OtherDetails = React.createContext();

function App() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <UseDocumentTitle />
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

// ! useReducer Hook
// {/* <UseReducerWithString />
// <FetchingUsingUseReducerPart2 /> */}

// ! useRef
// {/* <UseMemoIntro /> */}
// {/* <UseRef2Class />
// <UseRef2 /> */}
