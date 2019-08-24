import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import { Table } from '@material-ui/core';
import VerifiedTable from './VerifiedTable';
import UnVerifiedTable from './UnVerifiedTable';
import MaterialTable from 'material-table';
import {loadingHarmonized} from '../redux/action_creators/Partner_info_Load.js';

const mapStateToProps = (state) => {

  return {
    data: state.AppReducers,
    fetching: state.AppReducers.fetching,
    verified: state.AppReducers.verified,
    harmonized:state.AppReducers.harmonized

  }
}

let columns = [
  { title: "Medicine form", field: "med_form", },
  { title: "Manufacturer", field: "manufacturer" },
  { title: "Brand name", field: "brand_name" },
  { title: "Composition", field: "composition"},
  { title: "Prescription", field: "pres_type" },
  { title: "HSN Code", field: "hsn_id" },
  { title: "Primary Pack", field: "primary_pack" },
  { title: "Secondary Pack", field: "secondary_pack" },
  {title:"Banned",field:"is_banned", render:rowData => <div>{rowData.is_banned == "true"?<span style={{color:"red"}}>YES</span>:<span style={{color:"green"}}>NO</span> }</div>}
];
class DrugsManagement extends React.Component {


  constructor(props) {
    super(props);
    props.dispatch(loadingHarmonized());
    console.log("HARMONISED PROPS",props);
  
  }
 
  render() {
    return (
      <div className="display_row">
        <MaterialTable
          columns={columns}
          data={this.props.harmonized}
          onRowClick={(rowData)=>{console.log(rowData)}}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DrugsManagement);