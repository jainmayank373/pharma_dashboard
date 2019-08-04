import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { city, status } from "./utils";

class PartnerHeader extends React.Component {
  render() {
    return (
        <div className="partner-management">
          <h3>{this.props.heading}</h3>
          <input type="text" placeholder="Search by name/ partner id/ contact/ pincode"/>
          <select id="city-select">
            <option value="">City</option>
            {
              city.map((el, index) => <option key={index}>{el}</option>)
            }
          </select>
          <select id="status-select">
            <option value="">Status</option>
            {
              status.map((el, index) => <option key={index}>{el}</option>)
            }
          </select>
          <button onClick={this.props.handleClick}>Verified</button>
          <button onClick={this.props.handleUnverify}>Unverified</button>
          <button>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
    );
  }
}

export default PartnerHeader;
