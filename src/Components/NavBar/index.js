import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkItem from "../Link";
import React, { useEffect, useState } from "react";
import { Style } from "./style";

import {
  faAddressBook,
  faHome,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Index = (props) => {
  const [isUser, setIsUser] = useState(false);
  const [page, setPage] = useState([]);

  const pagesAdmin = [
    {
      name: "Dashboard",
      iconClass: faHome,
      path: "/",
    },
    {
      name: "User Profile",
      iconClass: faUser,
      path: "/user",
    },
  ];
  const pagesUser = [
    {
      name: "Dashboard",
      iconClass: faHome,
      path: "/",
    },
    {
      name: "Input Data",
      iconClass: faAddressBook,
      path: "/input",
    },
    {
      name: "User Profile",
      iconClass: faUser,
      path: "/user",
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === "admin") {
      setPage(pagesAdmin);
    } else {
      setPage(pagesUser);
    }
  }, [isUser, setPage]);

  return (
    <Style>
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 py-4">
        <div className="user py-2">
          <FontAwesomeIcon icon={faUser} size="4x" />
        </div>
        <h6 className="pt-2">Jafar</h6>
      </div>
      <div className="d-flex flex-column align-items-center w-100">
        <ul className="p-0">
          {page.map((page, index) => (
            <LinkItem page={page} key={index} />
          ))}
        </ul>
      </div>
      <div className="logout-container">
        <div to="/login" className="logout" onClick={() => props.logout()}>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />{" "}
          <span className="pl-3 font-weight-bold" style={{ fontSize: "16px" }}>
            Logout
          </span>
        </div>
      </div>
    </Style>
  );
};

export default Index;
