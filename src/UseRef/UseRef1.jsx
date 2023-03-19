// * useRef Hook
// ? These hook helps us to access DOM nodes using functional components

// ! In these example we take login Form
// ? When we open the page by default the username input Field should be Focused on page load

import React, { useEffect, useRef } from "react";

const UseRef1 = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // Focus on input element using ref Hook
    inputRef.current.focus();
    // current is a react property
    // it sets the current property to its corresponding DOM node(input in these example)
    // In simple we are accessing input Element using hooks
  }, []);
  return (
    <div>
      <input className="form-control" ref={inputRef} type="text" />
    </div>
  );
};

export default UseRef1;
