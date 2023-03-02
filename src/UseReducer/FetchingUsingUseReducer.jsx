//  ?  In these module we use useState and useReducer to fetch the data

// * Step 1 :Install Axios package
// *  command : npm install axios

// ! In these example we use useEffect , useState and axios to fetch the data.
//  To understand further concetps.

import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingUsingUseReducerPart1 = () => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setloading(false);
        setPost(response.data);
        setError("");
      })
      .catch((e) => {
        setloading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default FetchingUsingUseReducerPart1;
