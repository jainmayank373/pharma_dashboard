import React from "react";
import VerifiedHeader from "./VerifiedHeader";

var dummyData = Array(10).fill(0);
let columns = [ "id", "city", "verifiedPartners", "transactions", "closure", "cancellations" ];
dummyData = dummyData.map((_,index) => {
  return {
      id: index,
      city: 'Noida',
      verifiedPartners: '127',
      transactions: "2000",
      closure: '10%',
      cancellations: '10%',
  }
})

class Verified extends React.Component {
  render() {
    return (
      <>
        <VerifiedHeader />
        <table className="partner-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>City/Pincode</th>
              <th>#Verified Partners</th>
              <th>#Transactions</th>
              <th>Closures</th>
              <th>Cancellations</th>
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
      </>
    );
  }
}

export default Verified;
