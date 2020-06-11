import React from "react";
import './../../App.css';

function Chips() {
    const srcLeft = "prova";
    const srcRight = "prova";
    const label = "label";
    const removeLeft = true;

    return (
        <div class="component">
            <h2>Chips</h2>
            <we-chips src-img-left={srcLeft} src-img-right={srcRight} label={label} remove-left={removeLeft} />
        </div>
    );
}

export default Chips;
