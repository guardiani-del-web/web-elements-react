import React from "react";
import './../../App.css';

function Radio() {
    const name = 'Country';
    const checked = true;
    const disabled = false;

    const radio1 = 'Peru';
    const radio2 = 'Italia';
    const radio3 = 'Germany';

    const radioHandler = value => {
        console.log('radioHandler', value);
    }

    return (
        <div class="component">
            <h2>Radio</h2>
            <we-radio-group name={name} change-callback={radioHandler}>
                <we-radio value={radio1}>{radio1}</we-radio>
                <we-radio checked={checked} disabled={disabled} value={radio2}>{radio2}</we-radio>
                <we-radio value={radio3}>{radio3}</we-radio>
            </we-radio-group>
        </div>
    );
}

export default Radio;
