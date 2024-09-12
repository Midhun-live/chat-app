import React from "react";

function MessageOthers() {
  var props1 = { name: "Midhun", message: "Hi" };
  return (
    <div className="other-message-container">
      <div className="convo-con">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-container">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastMessage">{props1.message}</p>
          <p className="con-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
