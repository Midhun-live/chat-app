import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ContrastIcon from "@mui/icons-material/Contrast";
import SearchIcon from "@mui/icons-material/Search";
import Conversation from "./Conversation";

function SideBar() {
  return (
    <div className="sidebar-con">
      <div className="sb-header">
        <div className="left-sb">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="right-sb">
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton>
            <ContrastIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-ip" />
      </div>
      <div className="sb-convo">
        <Conversation />
      </div>
    </div>
  );
}

export default SideBar;
