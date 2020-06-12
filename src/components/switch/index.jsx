import React from "react";
import './../../App.css';

function Switch() {
    const name = 'MySwitch';
  const enabled = false;

  const switchHandler = value => {
    console.log('switchHandler', value);
  }

    return (
        <div class="component">
            <h2>Switch</h2>
            <we-switch name={name} enabled={enabled} change-callback={switchHandler}></we-switch>
        </div>
    );
}

export default Switch;
