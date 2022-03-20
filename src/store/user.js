import React, { createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
  const user = {
    name: "yujin",
    job: "developer",
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
