import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "./styles.css";

// https://github.com/Leaflet/Leaflet/issues/3186
const MAP_BASE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const position = [-41, 172];
const zoom = 6;

function App() {
  return (
    <div className="App">
      <Map
        center={position}
        style={{
          width: "98vw",
          height: "98vh",
          zIndex: "0"
        }}
        zoom={zoom}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
