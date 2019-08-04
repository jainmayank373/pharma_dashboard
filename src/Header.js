import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

function Header() {
  return (
      <div className="header">
        <div className="header-inline">
          <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faBlog} /> Logo
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
  );
}

export default Header;
