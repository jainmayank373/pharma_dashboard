import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompress,
  faPeopleCarry,
  faCannabis,
  faUserFriends,
  faCouch
} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <ul className="list-main">
            <div className="list-item">
              <FontAwesomeIcon icon={faCompress} />{" "}
              <li className="list-items">Overview</li>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faPeopleCarry} />
              <li className="list-items">Partners</li>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCannabis} />
              <li className="list-items">Drugs Management</li>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faUserFriends} />
              <li className="list-items">Customer Relations</li>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCouch} />
              <li className="list-items">Coupons</li>
            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
