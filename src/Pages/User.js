import React, { useEffect } from "react";
import UserProfile from "../Components/User";
import Body from "../Components/Body";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useStore } from "../api/index";

const Style = styled.div`
  margin-left: 250px;
  background-color: #f2f7ff;
  font-family: "Open Sans", sans-serif;
  padding: 0 30px 0 30px;
  overflow: hidden;
`;

const User = () => {
  const history = useHistory();
  const setAuthFalse = useStore((state) => state.setAuthFalse);
  const getUser = useStore((state) => state.getUser);
  const data = useStore((state) => state.user);

  const logout = () => {
    localStorage.clear();
    setAuthFalse();
    history.push("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Style>
      <NavBar logout={logout} />
      <Body>
        <UserProfile data={data} />
      </Body>
    </Style>
  );
};

export default User;
