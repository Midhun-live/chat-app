import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

function ChatArea() {
  return (
    <div className="chatarea-con">
      <div className="chatArea-header">
        <p className="con-icon">M</p>
        <div className="header-text">
          <p className="con-title">Midhun</p>
          <p className="con-timStamp">today</p>
        </div>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="message-container">Message Container</div>
      <div className="text-input-area">
        <input placeholder="search" className="search-ip" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
