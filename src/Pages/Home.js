import React, { useEffect, useState } from "react";
import Dashboard from "../Components/Dashboard";
import DashboardAdmin from "../Components/DashboardAdmin";
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

const Home = () => {
  const isAuth = useStore((state) => state.isAuth);
  const setAuthTrue = useStore((state) => state.setAuthTrue);
  const setAuthFalse = useStore((state) => state.setAuthFalse);
  const [isUser, setIsUser] = useState(false);

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuthFalse();
    history.push("/login");
  };

  useEffect(() => {
    if (!isAuth) {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthTrue();
      } else {
        history.push("/login");
      }
    }
  }, [isAuth]);

  useEffect(() => {
    const role = localStorage.getItem("user");
    if (role === "user") {
      setIsUser(true);
    }
  }, [isUser, setIsUser]);

  return (
    <Style>
      <NavBar logout={logout} />
      <Body>{isUser ? <Dashboard /> : <DashboardAdmin />}</Body>
    </Style>
  );
};

export default Home;
