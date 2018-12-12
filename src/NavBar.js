import React, { Component } from 'react';
//components
import SearchForm from './components/SearchForm'
import Menu from './components/navbarMenu/Menu'

class NavBar extends Component {

    render() {
        return (
            <header className="App-header">
                <nav className="navbar navbar-expand-lg bg-light">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <SearchForm />
                        <Menu />
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavBar;
