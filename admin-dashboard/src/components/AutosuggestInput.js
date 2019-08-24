import React, { } from 'react'
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { Paper } from '@material-ui/core';
import { fetchingSuggestion,unPopulatingForm } from '../redux/action_creators/Partner_info_Load.js';
import Select from 'react-dropdown-select';
const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
        populatedForm: state.populatedForm
    }
}


const languages = [
    {
        composition: 'C',
        year: 1972
    },

    {
        composition: 'CA',
        year: 1972
    },
    {
        composition: 'CB',
        year: 1972
    },
    {
        composition: 'Elm',
        year: 2012
    },
];


// Teach Autosuggest how to calculate suggestions for any given input value.

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

// Use your imagination to render suggestions.

const renderSuggestion = suggestion => (
    <Paper className="suggestion_container">
        {suggestion.composition}
    </Paper>
);


class AutosuggestInput extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {
            value: this.props.rowValue,
            suggestions: []
        };
    }
 
    componentWillReceiveProps(){
        
        this.setState({
            value:this.props.type
        })
    }
    onChange = (event, { newValue }) => {
        console.log(newValue);
        this.setState({
            value: newValue
        });

    }

    getSuggestionValue = suggestion => { console.log(suggestion); return suggestion.composition };

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 && this.props.suggestions ? [] : this.props.suggestions.filter(lang =>
            lang.composition.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    onSuggestionsFetchedRequest = ({ value }) => {

        console.log(value);
        console.log(this.state.suggestions);
        if (value.length == 4) {

            this.props.dispatch(fetchingSuggestion(value));

            this.setState({
                suggestions: this.props.suggestions
            })
        }

        /*if(value.length == 2){

        }*/
    }

    onSuggestionsClearRequest = () => {
        this.setState({
            suggestions: []
        })
    }
    render() {

        var { value } = this.state;
        if(this.props.type ){
                console.log(this.props.type);
        }
         
        const inputProps = {
            className: "suugestion_input",
            value,
            onChange: this.onChange
        };
        return (
            <div>
                <Autosuggest
                    suggestions={this.props.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchedRequest}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequest}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        )
    }

}

export default connect(mapStateToProps)(AutosuggestInput);
