import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './components/map.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedStates: [48, 22, 49]
    };
  }

  // componentDidMount() {
  //   fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
  //   	"method": "GET",
  //   	"headers": {
  //   		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  //   		"x-rapidapi-key": "428321991cmsh2446fdc7261ff64p136d20jsn11609dc86cab"
  //   	}
  //   })
  //   .then(response => {
  //   	console.log(response);
  //   })
  //   .catch(err => {
  //   	console.log(err);
  //   });
  // }

  render() {
    return (
      <div className="App">
        <div className="text">
          <h1>The Good Weather Map</h1>
          <p>A map of the US that only shows states that are currently sunny and
          in the 70's.<br/><br/>
          The Good Weather Map uses the <a href="https://openweathermap.org/">
          OpenWeather API</a> to find what states are nice right now, and displays
          them using <a href="https://www.react-simple-maps.io/">React Simple Maps</a>.</p>
        </div>
        <Map highlight={this.state.highlightedStates} />
      </div>
    );
  }
}

export default App;
