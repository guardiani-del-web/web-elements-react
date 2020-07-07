import React from "react";
import "./../../App.css";
import { useEventListener } from "./../../common";

function Switch() {
  const valueGroup = "valueGroup";

  const value1 = "Switch 1";
  const value2 = "Switch 2";
  const value3 = "Switch 3";
  const checked = false;

  const element = React.useRef(null);
  useEventListener(element, "switchGroupCallback", (data) =>
    console.log("switchGroupCallback", data)
  );

  return (
    <div className="component">
      <h2>Switch</h2>
      <we-switch-group value={valueGroup} ref={element}>
        <we-switch value={value1} checked={checked}></we-switch>
        <we-switch value={value2} checked={checked}></we-switch>
        <we-switch value={value3} checked={checked}></we-switch>
      </we-switch-group>
    </div>
  );
}

export default Switch;
