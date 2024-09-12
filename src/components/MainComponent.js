import React from "react";
import "./myStyles.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";

function MainComponent() {
  return (
    <div className="main-container">
      <SideBar />
      <ChatArea />
    </div>
  );
}

export default MainComponent;
