import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './components/map.js';

import stateCoordinates from './data/stateCoordinates.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedStates: [null]
    };
  }

  componentDidMount() {
    var temp;
    var skiesAreClear;
    stateCoordinates.items.forEach(state => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${state.latitude}&lon=${state.longitude}&appid=1e8fc8de2dcb07edbb832f5aec609e1a`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        temp = parseInt((response.main.temp - 273.15) * 9 / 5 + 32);
        skiesAreClear = (response.clouds.all < 30);
        if (temp >= 70 && temp < 80 && skiesAreClear)
          this.setState({
            highlightedStates: this.state.highlightedStates.concat(state.val)
          });
      })
      .catch(error => console.error(error));
    });
  }

  render() {
    return (
      <div className="App">
        <div className="text">
          <h1>The Good Weather Map</h1>
          <p>A map of the US that shows which states are currently
          in the 70's with clear skies.<br/><br/>
          The Good Weather Map uses the <a href="https://openweathermap.org/">
          OpenWeather API</a> to find what states are nice right now, and highlights them
          them using <a href="https://www.react-simple-maps.io/">React Simple Maps</a>.</p>
          {this.state.highlightedStates[0] == null &&
            <p style={{margin: "0px", fontSize: "1rem"}}>
            Looks like there's no decent weather anywhere. :( <br/>
            Come back later, maybe Texas will light up or something.
            </p>
          }
        </div>
        <Map highlight={this.state.highlightedStates} />
      </div>
    );
  }
}

export default App;
