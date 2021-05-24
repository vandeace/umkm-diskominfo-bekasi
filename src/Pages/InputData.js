import React, { useState } from "react";
import Body from "../Components/Body";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
import Input from "../Components/InputData";

const Style = styled.div`
  margin-left: 250px;
  background-color: #f2f7ff;
  font-family: "Open Sans", sans-serif;
  padding: 0 30px 0 30px;
  overflow: hidden;
  .custom-container {
    margin: 30px;
    padding: 20px 50px 20px 50px;
    border: 1px solid #dae1e7;
    font-size: 16px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
      rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  }
`;

const InputData = () => {
  return (
    <Style>
      <NavBar />
      <Body>
        <Input />
      </Body>
    </Style>
  );
};

export default InputData;
