import React from "react";

import { city, sort } from "./utils";

class VerifiedHeader extends React.Component {
  render() {
    return (
      <>
        <div className="verified-header">
          <h3>Demand Heat Map</h3>
          <input type="text" placeholder="Search by pincode" />
          <select id="city-select">
            <option value="">City</option>
            {city.map((el, index) => {
              return <option key={index}>{el}</option>;
            })}
          </select>
          <select id="sort-select">
            <option value="">Sort</option>
            {sort.map((el, index) => {
              return <option key={index}>{el}</option>;
            })}
          </select>
          {/* <button>
            <FontAwesomeIcon icon={faArrowDown} />
          </button> */}
        </div>
      </>
    );
  }
}

export default VerifiedHeader;
