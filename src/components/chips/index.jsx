import React from "react";
import "./../../App.css";
import { useEventListener } from './../../common';

function Chips(props) {
  window.props = props;
  const nameGroup = "chipsGroup";

  const removeLeft = true;

  const isSelectable = true;

  const image1 = "https://via.placeholder.com/15";
  const image2 = "https://via.placeholder.com/15";
  const label1 = "label 1";
  const label2 = "label 2";
  const label3 = "label 3";

  const value1 = "chip 1";
  const value2 = "chip 2";
  const value3 = "chip 3";

  const element = React.useRef(null);
  useEventListener(element, "chipsGroupCallback", (data) => console.log("chipsGroupCallback", data));

  return (
    <div className="component">
      <h2>Chips</h2>
      <we-chips-group value={nameGroup} ref={element}>
        <we-chips
          value={value1}
          src-img-left={image1}
          src-img-right={image2}
          label={label1}
          remove-left={removeLeft}
          is-selectable={isSelectable}
        ></we-chips>
        <we-chips
          value={value2}
          src-img-left={image1}
          src-img-right={image2}
          label={label2}
          remove-left={removeLeft}
          is-selectable={isSelectable}
        ></we-chips>
        <we-chips
          value={value3}
          src-img-left={image1}
          src-img-right={image2}
          label={label3}
          remove-left={removeLeft}
          is-selectable={isSelectable}
        ></we-chips>
      </we-chips-group>
    </div>
  );
}

export default Chips;
