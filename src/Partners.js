import React from "react";

import PartnerTable from "./PartnerTable";
import PartnerHeader from "./PartnerHeader";
import DatePicker from "./DatePicker";

class Partners extends React.Component {
  state = {
    isVerified: false,
    showDate: false
  };

  handleClick = () => {
    this.setState({
      isVerified: true
    });
  };

  handleUnverify = () => {
    this.setState({
      isVerified: false
    });
  };

  handleDatePicker = () => {
    this.setState({
      showDate: !this.state.showDate
    });
  };

  render() {
    return (
        <div className="partners">
          <div className="partner-head">
            <h3 style={{ textAlign: "left", color: "#2A87E0" }}>Partners</h3>
            {this.state.showDate ? (
              <div className="date-pick">
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
            ) : null}
            <button onClick={this.handleDatePicker}>Select date range</button>
          </div>
          <PartnerHeader
            isVerified={this.state.isVerified}
            handleClick={this.handleClick}
            handleUnverify={this.handleUnverify}
            heading="Partner Management"
          />
          <PartnerTable isVerified={this.state.isVerified} />
        </div>
    );
  }
}

export default Partners;
