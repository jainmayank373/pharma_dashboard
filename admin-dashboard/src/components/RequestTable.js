import React, { } from "react";
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import Select from 'react-dropdown-select'
import { Fab, Icon, Button, withStyles, CircularProgress, Paper, InputLabel, InputBase, FormControl } from '@material-ui/core';
import '../style/table.css';
import { load_partner, LoadingPartnerInfo, loadingUnHarmonized, onDecline, populatingForm,unPopulatingForm } from '../redux/action_creators/Partner_info_Load.js';
import AutosuggestInput from "./AutosuggestInput";


const languages = [
    {
        id: 1,
        name: "BANDAGE"

    },
    {
        id: 2,
        name: "CAP"


    },
    {
        id: 3,
        name: "CREAM"


    }, {
        id: 4,
        name: "DEVICE"


    }, {
        id: 5,
        name: "DISKETTES"


    }, {
        id: 6,
        name: "DROPS"


    }, {
        id: 7,
        name: "EXPECTORANT"


    }, {
        id: 8,
        name: "FACE WASH"

    }, {
        id: 9,
        name: "FOAM"

    },
    {
        id: 10,
        name: "GEL"


    }, {
        id: 11,
        name: "GRANULES"


    }, {
        id: 12,
        name: "GUM"


    }, {
        id: 13,
        name: "GUMMIES"


    }, {
        id: 14,
        name: "INFUSION"


    },
    {
        id: 15,
        name: "INHALER"

    },
    {
        id: 16,
        name: "INJ"


    }, {
        id: 17,
        name: "JELLY"


    }, {
        id: 18,
        name: "KIT"


    }, {
        id: 19,
        name: "LINIMENT"


    }, {
        id: 20,
        name: "LIQUID"


    }, {
        id: 21,
        name: "LOTION"


    }, {
        id: 22,
        name: "LOZENGE"


    }, {
        id: 23,
        name: "OIL"


    }, {
        id: 24,
        name: "OINT"


    }, {
        id: 25,
        name: "PAINT"


    }, {
        id: 26,
        name: "PARTICLES"


    }, {
        id: 27,
        name: "PASTE"


    }, {
        id: 28,
        name: "PASTILLES"


    }, {
        id: 29,
        name: "PATCH"


    }, {
        id: 30,
        name: "PESSARY"


    }, {
        id: 31,
        name: "PLASTER"


    }, {
        id: 32,
        name: "POWDER"


    }, {
        id: 33,
        name: "RESPULES"


    }, {
        id: 34,
        name: "ROLL-ON"


    }, {
        id: 35,
        name: "ROTACAPS"


    }, {
        id: 36,
        name: "SACHET"


    }, {
        id: 37,
        name: "SHAMPOO"


    }, {
        id: 38,
        name: "SOAP"


    }, {
        id: 39,
        name: "SOFTULES"


    }, {
        id: 40,
        name: "SOLUTION"


    }, {
        id: 41,
        name: "SPRAY"


    }, {
        id: 42,
        name: "STRIP"


    }, {
        id: 43,
        name: "SUPPOSITORY"


    }, {
        id: 44,
        name: "SUSP"


    }, {
        id: 45,
        name: "SYP"


    },
    {
        id: 46,
        name: "TAB"


    },
    {
        id: 47,
        name: "TINCTURE"


    }, {
        id: 48,
        name: "TRANSCAPS"


    }, {
        id: 49,
        name: "TRANSPULES"


    }, {
        id: 50,
        name: "VACCINE"


    }, {
        id: 51,
        name: "WIPES"


    }

];
const mapStateToProps = (state) => {
    return {
        data: state,
        fetching: state.fetching,
        unharmonized: state.unharmonized,
        populatedForm: state.populatedForm

    }
}

function DateFormat(props) {

    const date = new Date(props.date);
    const newDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    console.log("NewDATE", newDate);
    return (
        <span>{newDate}</span>
    );

}

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {

        borderRadius: "2px",
        position: 'relative',
        backgroundColor: "#fbfbfb",
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '506px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

function Status(props) {
    return (<BootstrapInput />);
}

//////// Creation of dummy data for the table ////////////

class RequestTable extends React.Component {


    constructor(props) {
        super(props);
        props.dispatch(loadingUnHarmonized());
        this.onRowClick = this.onRowClick.bind(this);
        this.state = {
            brand_name: '',
            manufacturer: '',
            hsn_code: ''
        }
        console.log(props);
    }

    onInputChange = (type) => (event) => {
        console.log(type,event.target.value);
        this.setState({...this.state,[type]:event.target.value})
    }
    onRowClick = (data) => {
        console.log(data);
        this.setState({...this.state,['manufacturer']:data.manufacturer})
        this.props.dispatch(populatingForm(data));
    }
    columns = [
        { title: "Vendor", field: "inventories[0].org.org_name" },
        { title: "Submited on", field: "created", render: rowData => <DateFormat date={rowData.created} /> },
        { title: "Medicine form", field: "med_form" },
        { title: "Manufacturer", field: "manufacturer" },
        { title: "Brand name", field: "brand_name" },
        { title: "Action", field: "is_declined", render: rowData => <div>{rowData.is_declined == false ? <Button onClick={() => { this.onDecline(rowData) }} style={{ backgroundColor: "rgba(249, 33, 33, 0.28)", color: "#ff5e5e" }}>Decline</Button> : <div>Rejected</div>}</div> },
    ];

    onDecline(rowData) {
        console.log("decline request");
        console.log("ROWDAT DECLINE", rowData);
        this.props.dispatch(onDecline(rowData.unhar_med_id));
        

    }
    selectChange = (value) => {
        console.log(value);

    }

    onAddMedicines = (value) => {

        console.log(value,this.stat);
    }

    render() {

        if (this.props.unharmonized.length == 0) {
            return (<CircularProgress color="secondary" />)
        }
        else if (this.props.unharmonized.length) {
            console.log("Verified User", this.props.unharmonized)
            return (

                <div className="display_row">
                    <MaterialTable
                        style={{ width: "50%" }}
                        title="Medition addition Request"
                        columns={this.columns}
                        data={this.props.unharmonized}
                        onRowClick={(event, rowData) => { this.onRowClick(rowData) }}
                        options={{
                            filtering: true
                        }}
                    >
                    </MaterialTable>
                    <Paper
                        className="display_column"
                        style={{ width: "45%" }}
                    >
                        <h1>Add Medicine</h1>
                        <FormControl >
                            <InputLabel shrink htmlFor="bootstrap-input">
                                MEDICINE FORM
                            </InputLabel>
                            <Select className="select_input" labelField="name" valueField="name" options={languages} clearable={true} clearOnBlur={true} onChange={this.selectChange} />
                        </FormControl>
                        <FormControl>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                MANUFACTURER'S NAME
                            </InputLabel>
                            <AutosuggestInput type={this.props.populatedForm != null ? this.props.populatedForm.manufacturer:''} rowValue={this.state.manufacturer} />
                        </FormControl>
                        <FormControl>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                BRAND NAME
                            </InputLabel>
                            <BootstrapInput value={this.props.populatedForm != null ? this.props.populatedForm.brand_name : ''} id="bootstrap-input4" />
                        </FormControl>
                        <FormControl>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                HSN CODE
                            </InputLabel>
                            <BootstrapInput value={this.state.hsn_code} onChange={this.onInputChange('hsn_code')} id="bootstrap-input5" />
                        </FormControl>
                        <FormControl>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                SALT COMPOSITION
                            </InputLabel>
                            <AutosuggestInput type="MAYANK JAIN" rowValue="JAIN" />
                        </FormControl>
                        <FormControl>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                PRIMARY PACK VALUE
                            </InputLabel>
                            <BootstrapInput value={this.props.populatedForm != null ? this.props.populatedForm.brand_name : ''} id="bootstrap-input6" />
                        </FormControl>
                        <div style={{ paddingTop: "20px" }}>
                            <Button onClick={this.onAddMedicines} variant="contained" color="primary">Add Medicine</Button>
                        </div>
                    </Paper>
                </div>
            );
        }
        else {

            console.log("Verified User", this.props.unharmonized)
            return (
                <h1>Error</h1>
            );
        }
    }
}

export default connect(mapStateToProps)(RequestTable);
