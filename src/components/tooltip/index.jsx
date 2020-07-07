import React from "react";
import "./../../App.css";

function Tooltip() {
  return (
    <div className="component">
      <h2>Tooltip</h2>
      <we-tooltip>
        <div slot="reference"> Put on this container to see the tooltip </div>
        <div slot="tooltip">
          <label>Complex</label>
          <label>Tooltip</label>
        </div>
      </we-tooltip>

      <we-tooltip value="simple tooltip">
        <label slot="reference">
          {" "}
          Put on this container to see the tooltip{" "}
        </label>
      </we-tooltip>
    </div>
  );
}

export default Tooltip;
