import React, { Component } from 'react';
//components
import TitleConfig from './TitleConfig'
import NavBar from './components/NavBar'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let lastClicked = null;
    if (this.props.reducer.result) {
      lastClicked =
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.reducer.result.uuid}</li>
            <li className="list-group-item">{this.props.reducer.result.title}</li>
            <li className="list-group-item">{this.props.reducer.result.description}</li>
          </ul>
        </div>
    }

    return (
      <div className="App">
        <TitleConfig />
        <NavBar />

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              {lastClicked}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps)(App);