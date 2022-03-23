import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHook() {
  const dataSample = useFetch("https://jsonplaceholder.typicode.com/comments");
  console.log(dataSample);
  return <div>Content</div>;
}

export default CustomHook;
