import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//utils
import { getAutocomplete } from '../utils/api'
class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autocomplete: []
        }
    }

    resetAutocomplete() {
        this.setState({ autocomplete: [] });
    }
    onFocus(event) {
        event.target.value = '';
        this.resetAutocomplete();
    }
    inputChangesHandler(event) {
        let self = this;
        if (event.target.value.length >= 1) {
            getAutocomplete(event.target.value)
                .then(response => {
                    this.setState({ autocomplete: response.data })
                })
                .catch(function (error) {
                    self.resetAutocomplete();
                })
        } else {
            this.resetAutocomplete();
        }
    }
    render() {
        let autocomplete = null;
        let nResults = 10;
        if (this.state.autocomplete) {
            autocomplete = (
                this.state.autocomplete.slice(0, nResults).map((item, index) => {
                    const length = 32;
                    let trimmedString = item.suggestion.substring(0, length);
                    let ellipsis = (item.suggestion.length > length ? '...' : '');
                    return <a className="dropdown-item" key={item.uuid} href="#" alt={item.suggestion}>
                        {trimmedString}{ellipsis}
                    </a>
                })
            )
        }
        return (
            { autocomplete }
        );
    }
}

export default SearchForm;