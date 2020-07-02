import React from "react";
import './../../App.css';

function Switch() {
  
  const valueGroup = 'valueGroup';

  const value1 =  'Switch 1';
  const value2 = 'Switch 2';
  const value3 = 'Switch 3';
  const checked =false;


  window.addEventListener('switchGroupCallback', (data) => console.log("switchGroupCallback listener",data));

    return (
        <div className="component">
            <h2>Switch</h2>
            <we-switch-group value={valueGroup}>
    <we-switch value={value1} checked={checked}></we-switch>
    <we-switch value={value2} checked={checked}></we-switch>
    <we-switch value={value3} checked={checked}></we-switch>
  </we-switch-group>
        </div>
    );
}

 export default Switch;
