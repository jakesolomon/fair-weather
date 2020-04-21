import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Graticule, ComposableMap, Geographies, Geography } from "react-simple-maps";

import '../App.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// import coordinates
// https://www.latlong.net/category/states-236-14.html

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  // componentDidMount() {
  //   fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
  //   .then(response => response.json())
  //   .then(response => console.log(response));
  // }

  render() {

    var colors = new Array(57);
    colors.fill("#DDD");

    this.props.highlight.forEach(id => colors[id] = "#AEA");

    var geographies = (
      <Geographies geography={geoUrl}>
      {({ geographies }) =>
      geographies.map(geo =>
        <Geography
        key={geo.rsmKey}
        stroke="#BFBFBF"
        geography={geo}
        fill={colors[parseInt(geo.id)]}
        />)
      }
      </Geographies>
    );

    return (
      <div className="map">
        <ComposableMap projection="geoAlbersUsa">
        {geographies}
        </ComposableMap>
      </div>
    );
  }
}

export default Map;
