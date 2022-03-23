import React from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

function CustomHook() {
  const dataSample = useFetch("https://jsonplaceholder.typicode.com/comments");
  //   dataSample.forEach((data) => console.log(data.email));
  const dataArray = [];
  const test = dataSample.forEach((data) => {
    let objSample = new Object();
    objSample.email = data.email;
    dataArray.push(objSample);
  });
  const array10 = [];
  for (let i = 0; i < 10; i++) {
    array10.push(dataArray[i]);
  }
  //   const initialEmail = [{ email: "1" }, { email: "2" }, { email: "3" }];
  const [email, setEmail] = useLocalStorage("email", array10); //주의:기존로컬호스트를 지우지않는한 덮어쓰기 불가
  console.log(email);
  return <div>Content</div>;
}

export default CustomHook;
