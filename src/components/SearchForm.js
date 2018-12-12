import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchForm extends Component {

    render() {
        return (
            <form className="form-inline my-2 my-lg-0 ml-auto">
                <div className="input-group">
                    <input type="text" className="form-control searchbox" aria-label="" placeholder="Search for..." />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </div>
                <div className="autocomplete">
                    <div>item</div>
                </div>
            </form>
        );
    }
}

export default SearchForm;