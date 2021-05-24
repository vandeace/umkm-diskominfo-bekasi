import React from "react";
import styled from "styled-components";

export const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-left: 250px;
  padding: 0 30px 0 30px;
  background-color: #f2f7ff;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const index = (props) => {
  return <Style>{props.children}</Style>;
};

export default index;
