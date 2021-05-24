import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Style = styled.li`
  .link-item {
    display: flex;
    justify-content: start;
    align-items: center;
    color: #000;
    text-decoration: none;
    font-size: 16px;
  }
`;

const index = ({ page }) => {
  return (
    <Style>
      <Link
        to={page.path}
        className="link-item text-uppercase"
        style={
          window.location.pathname === page.path
            ? { color: "#fff" }
            : { color: "#000" }
        }
      >
        <FontAwesomeIcon icon={page.iconClass} />
        <span className="p-2">{page.name}</span>
      </Link>
    </Style>
  );
};

export default index;
