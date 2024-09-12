import React from "react";

function MessageSelf() {
  var props1 = { message: "Hi" };

  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props1.message}</p>
        <div className="self-timestamp">12:00am</div>
      </div>
    </div>
  );
}

export default MessageSelf;
