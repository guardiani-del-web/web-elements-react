import React from "react";
import './../../App.css';

function Dropdown() {
    return (
        <div class="component">
            <h2>Dropdown</h2>
            <we-dropdown-group>
                <we-dropdown-item
                    label="option 1"
                    height='["0px", "170px"]'
                    arrow='["right","left"]'
                >
                    <we-dropdown-group>
                        <we-dropdown-item label="suboption 1"> </we-dropdown-item>
                        <we-dropdown-item label="suboption 2"></we-dropdown-item>
                        <we-dropdown-item label="suboption 3"></we-dropdown-item>
                    </we-dropdown-group>
                </we-dropdown-item>
                <we-dropdown-item label="option 2"> </we-dropdown-item>
                <we-dropdown-item label="option 3"> </we-dropdown-item>
            </we-dropdown-group>
        </div>
    );
}

export default Dropdown;
