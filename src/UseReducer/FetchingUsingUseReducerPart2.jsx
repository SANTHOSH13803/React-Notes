// ! In these Module we use useReducer and useEffect to fetch the data

import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initalState = { loading: true, error: "", post: {} };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.palyload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong!!",
        post: {},
      };

    default:
      return state;
  }
};

function FetchingUsingUseReducerPart2() {
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", palyload: response.data });
      })
      .catch((e) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchingUsingUseReducerPart2;

// * The only difference between part1 and part2 is,
// ? In part1 each has seperate state,
// ! Where as in part2 Has only one state and state is managed by using reducer method.

// /---------------------------------------------------------------------------------
// /---------------------------------------------------------------------------------

// TODO : When to use state hook and reducer hook.

// * useState is generally used if we deal with strings, numbers and booleans
// ? useReducer is generally used if we deal with Arrays and objects.

//  * if we have one or two state transisitons ie., setFuntion we use useState
// ? if there are more than 2 state transistions useReducer is used.

// * if state variables not realted useState.
// ? if all the states are related to one action i.e, all the state variables are updated according to the status

//  By using useReducer the code is most predictable and maintainable.

//  The main use of useReducer is we simply need to add a dispatch method to add new feature
//  Thus in these way all the state management code will be present in reducer fuction which makes code readable.
