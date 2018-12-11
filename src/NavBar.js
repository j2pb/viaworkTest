import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {

    render() {
        return (
            <header className="App-header">
                <nav className="navbar navbar-expand-lg bg-light">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0 ml-auto">
                            <div className="input-group">

                                <input type="text" className="form-control searchbox" aria-label="" placeholder="Search for..." />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">

                                <a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faBell} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </a>
                            </li>

                        </ul>



                    </div>
                </nav>
            </header>
        );
    }
}

export default NavBar;
