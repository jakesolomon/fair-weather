import React from 'react';
import ReactDOM from "react-dom";
import { Graticule, ComposableMap, Geographies, Geography } from "react-simple-maps";

import './map.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// import coordinates
// https://www.latlong.net/category/states-236-14.html

function Map() {
  return (
    <div className="map">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo =>
              <Geography
                key={geo.rsmKey}
                stroke="#DDD"
                geography={geo}
                fill="#AAA"
              />)
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default Map;
