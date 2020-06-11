import React from "react";
import './../../App.css';

function Button() {
    const label="label button";
    const value="pressed";

    return (
        <div class="component">
            <h2>Button</h2>
            <we-button label={label} value={value}></we-button>
        </div>
    );
}

export default Button;
