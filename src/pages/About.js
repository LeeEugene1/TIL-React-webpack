import React, { useContext } from "react";
import UserContext from "../store/user";

function About() {
  console.log(useContext(UserContext)); //undefined because you import without {}
  return <div>dd</div>;
}

export default About;
