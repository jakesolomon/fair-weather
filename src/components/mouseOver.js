import React from "react";
import { useState, useEffect } from "react";

function MouseOver(props) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  if (props.mouseOverStateTemp) {
    return(
      <div
      id="hov"
      style={{
        position: "absolute",
        top: position.y + 40,
        left: position.x - 90,
        zIndex: 10,
        backgroundColor: "white",
        borderRadius: "3px",
        fontSize: ".7em",
      }}
      >
        <p
        style={{padding: ".2em 1em"}}
        ><nobr>
        Temperature: {props.mouseOverStateTemp}°F <br/>
        Cloud Cover: {props.mouseOverStateClouds}%
        </nobr></p>
      </div>
    );
  } else {
    return (null);
  }
}

export default MouseOver;
