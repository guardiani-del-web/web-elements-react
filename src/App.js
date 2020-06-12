import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Accordion,
  Card,
  Checkbox,
  Chips,
  Divider,
  Dropdown,
  Modal,
  NavigationDrawer,
  Radio,
  Slider,
  Switch,
  Tab,
  Textarea,
  Tooltip
} from './components'

function App() {
  return (
    <div>
      <h1>Web Components</h1>
      <Accordion/>
      {/* <Card/> */}
      <Checkbox/>
      <Chips/>
      <Divider/>
      {/* <Dropdown/> */}
      {/* <Modal/> */}
      
      <Radio />
      <Slider/>
      <Switch/>
      <Tab/>
      <Textarea/>
      {/* <Tooltip/> */}
    </div>
  );
}

export default App;
