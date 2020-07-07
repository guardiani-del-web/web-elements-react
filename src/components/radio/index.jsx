import React from "react";
import './../../App.css';
import { useEventListener } from './../../common';

function Radio() {
    const name = 'Country';
    const checked = true;
    const disabled = false;

    const radio1 = 'Peru';
    const radio2 = 'Italia';
    const radio3 = 'Germany';

    const element = React.useRef(null);
  useEventListener(element, "radioGroupCallback", (data) => console.log("radioGroupCallback", data));

    return (
        <div className="component">
            <h2>Radio</h2>
            <we-radio-group value={name}>
                <we-radio value={radio1}>{radio1}</we-radio>
                <we-radio checked={checked} disabled={disabled} value={radio2}>{radio2}</we-radio>
                <we-radio value={radio3}>{radio3}</we-radio>
            </we-radio-group>
        </div>
    );
}

export default Radio;
