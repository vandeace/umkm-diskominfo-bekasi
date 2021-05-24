import React from "react";
import UserProfile from "../Components/User";
import Body from "../Components/Body";
import NavBar from "../Components/NavBar";
import styled from "styled-components";

const Style = styled.div`
  margin-left: 250px;
  background-color: #f2f7ff;
  font-family: "Open Sans", sans-serif;
  padding: 0 30px 0 30px;
  overflow: hidden;
`;

const User = () => {
  return (
    <Style>
      <NavBar />
      <Body>
        <UserProfile />
      </Body>
    </Style>
  );
};

export default User;
