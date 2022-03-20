import React, { useContext } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { UserContext } from "../store/user";

const Profile = () => {
  const userInfo = useContext(UserContext);
  console.log(userInfo);
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src="https://avatars3.githubusercontent.com/u/9492978?v=3"
        />
        <Card.Header>{userInfo.name}</Card.Header>
        <Card.Description>{userInfo.job}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://twitter.com/_esausilva" target="_blank">
          <Icon name="twitter" />
          Twitter
        </a>{" "}
        <a href="https://github.com/esausilva" target="_blank">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
