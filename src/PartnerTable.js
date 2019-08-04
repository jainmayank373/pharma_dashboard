import React from "react";
import Verified from "./PartnerTableVerified";
import VerifiedHeader from "./VerifiedHeader";

//////// Creation of dummy data for the table ////////////
var dummyData = Array(10).fill(0);
let columns = [ "id", "partnerId", "contact", "createdOn", "fulfilled", "medsMapped", "locality" ];
dummyData = dummyData.map((_,index) => {
  return {
      id: index,
      partnerId: 'Cipla',
      contact: '+91 9743245667',
      createdOn: "02-12-2018",
      fulfilled: 5,
      assigned: 10,
      medsMapped: 300,
      locality: "Rakkar, Dharamashala"
  }
})

class PartnerTable extends React.Component {
  render() {
    return (
      <>
        <table className="partner-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name & Partner id</th>
              <th>Contact/City</th>
              <th>Created on</th>
              <th>Fulfilled # / Assigned #</th>
              <th>Meds mapped</th>
              <th>Locality</th>
            </tr>
          </thead>
          <tbody>
            {
              dummyData.map(valueObj=>{
                return (
                  <tr key={valueObj.id}>
                    {
                      columns.map(key=>{
                        let value = valueObj[key];
                        if (key=="fulfilled"){
                          value = String(valueObj[key]) + "/" + valueObj["assigned"];
                        }
                        return (
                            <td key={key}>{value}</td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {this.props.isVerified ? <Verified /> : null}
      </>
    );
  }
}

export default PartnerTable;
