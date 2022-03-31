import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";
import CustomHook from "./CustomHook";

import { pullRight, h1 } from "./layout.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          react-starter-boilerplate-hmr
        </Header>
      </Link>
      {children}
      <CustomHook />
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>
  );
};

export default Layout;
