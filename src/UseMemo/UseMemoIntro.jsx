// ! UseMemo hook

// * is also used for preformance optimisation, It tells react

import React, { useState, useMemo } from "react";

const UseMemoIntro = () => {
  const [counter1, setcounter1] = useState(0);
  const [counter2, setcounter2] = useState(0);
  const incrementCounterOne = () => {
    setcounter1(counter1 + 1);
  };
  const incrementCounterTwo = () => {
    setcounter2(counter2 + 1);
  };

  const isEven = () => {
    let i = 0;
    while (i < 2000000000) i++;
    // using while loop to delay the Logic of isEven (Induces slowness to isEven Function)
    // In practical if we have huge amount of fetching occur the same delay is possible
    // Egs: Maping thousands of items ,Filtering items in array,Sorting items in array
    return counter1 % 2 === 0; //(ISSUE *  HERE we are performing on counter1 only not counter2)
  };

  //   ? The Main point here to notice is Even though we are applying isEven to counter1
  // ? When the counter2 button is clicked there will be a delay in updating counter2 value(ISSUE)

  //   ! This happens because when every time the state changes the component re-renders thus every time isEven is called again, thus raise performace issue
  //   * This is where useMemo Hook is used

  //----------------------------------------
  //----------------------------------------
  //   * useMemo Logic , (REMEMBER it returns a value not a funtion, In this case True or False)
  //   Syntax : useMemo(funtion,DependencyArray)
  const isEvenUsingMemo = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);
  //   By using useMemo in this code The delay in counter1 still be present but it doesn't interupt with counter2 performace

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>
        <button className="btn btn-primary" onClick={incrementCounterOne}>
          Count one - {counter1}
        </button>
        {/* <span>{isEven() ? "Even" : "Odd"}</span> // Using genereal method*/}
        <span>{isEvenUsingMemo ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button
          className="btn btn-info text-white"
          onClick={incrementCounterTwo}
        >
          Count one - {counter2}
        </button>
      </div>
    </div>
  );
};

export default UseMemoIntro;

// ** The main difference between useCallBack and useMemo is
// ? If we want to cache the function instance we use "useCallback"
// ? If we want to cache the result of an invoked funtion we use "useMemo"
