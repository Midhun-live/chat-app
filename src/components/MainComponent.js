import React from "react";
import "./myStyles.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import User_Groups from "./Users";
import { Outlet } from "react-router-dom";

function MainComponent() {
  return (
    <div className="main-container">
      <SideBar />
      <Outlet/>
    </div>
  );
}

export default MainComponent;
