import React, { Component } from 'react';
//components
import TitleConfig from './TitleConfig'
import NavBar from './components/NavBar'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let lastClicked = null;
    if (this.props.reducer) {
      lastClicked = (
        this.props.reducer.map((item, index) => {
          return <div className="card  mb-3" key={index}>
            <ul className="list-group list-group-flush" >
              <li className="list-group-item text-center"><strong>{item.jobTitle}</strong></li>
              <li className="list-group-item"><strong>uuid:</strong> {item.uuid}</li>
              <li className="list-group-item"><strong>title:</strong> {item.title}</li>
              <li className="list-group-item"><strong>description:</strong> {item.description}</li>
            </ul>
          </div>
        })
      )
    }

    return (
      <div className="App" >
        <TitleConfig />
        <NavBar />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6 mt-3">
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