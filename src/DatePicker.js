import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class PickDate extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        minDate={new Date()}
        maxDate={addDays(this.state.startDate)}
        onChange={this.handleChange}
      />
    );
  }
}

function addDays(date) {
  const newDate = date;
  console.log(newDate, 'max date');
  return newDate;
}

export default PickDate;
