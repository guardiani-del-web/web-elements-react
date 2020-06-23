import React from "react";
import './../../App.css';

function Switch() {
  const name1 = 'MySwitch 1';
  const name2 = 'MySwitch 2';
  const name3 = 'MySwitch 3';
  const checked = false;

  const nameGroup = "Switch Group";

  const switchHandler = value => {
    console.log('switchHandler', value);
  }

  return (
    <div class="component">
      <h2>Switch</h2>
      <we-switch-group name={nameGroup} change-switch-callback={switchHandler}>
        <we-switch name={name1} checked={checked}></we-switch>
        <we-switch name={name2} checked={checked}></we-switch>
        <we-switch name={name3} checked={checked}></we-switch>
      </we-switch-group>
    </div>
  );
}

export default Switch;
