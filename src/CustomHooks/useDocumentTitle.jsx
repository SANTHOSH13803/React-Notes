import React, { useState, useEffect } from "react";

const UseDocumentTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>
    </div>
  );
};

export default UseDocumentTitle;
// * The main concept to understand here is
// ? If we want to have the same useEffect concepts in more that one component
// ? Its better to create a customHook, So we can minimize the code

// ! How to do it??
// Step1 :  Create a new Hook (preferable in new Folder)
// Step2 : Write the repeated logic in that Hook(In this case useEffect)
// Step3: Import the hook where ever you needed and useIt.

// *Example

// ? DocumentTitleHook.js
// const useDocumentTitleHook = (count) => {
//     useEffect(() => {
//       document.title = `Count : ${count}`;
//     }, [count]);
// }

// ? UseDocumentTitle
// import useDocumentTitleHook from './DocumentTitleHook/UseDocumentTitleHook'
// const UseDocumentTitle = () => {
//     const [count, setCount] = useState(0);
//      useDocumentTitleHook(count);
//     return (
//       <div>
//         <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
//           Count : {count}
//         </button>
//       </div>
//     );
//   };
