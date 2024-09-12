import React from "react";
import "./myStyles.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";

function MainComponent() {
  return (
    <div className="main-container">
      <SideBar />
      <ChatArea />
    </div>
  );
}

export default MainComponent;
