import React from "react";
import "./myStyles.css";

function Conversation() {
  return (
    <div>
      <div className="convo-con">
        <p className="con-icon">M</p>
        <p className="con-title">Midhun</p>
        <p className="con-lastMessage">Hi</p>
        <p className="con-timeStamp">today</p>
      </div>
      <div className="convo-con">
        <p className="con-icon">M</p>
        <p className="con-title">Midhun</p>
        <p className="con-lastMessage">Hi</p>
        <p className="con-timeStamp">today</p>
      </div>
    </div>
  );
}

export default Conversation;
