import { IconButton } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

function CreateGroups() {
  return (
    <div className="creategroup-container">
      <input placeholder="Enter group name" className="search-ip" />
      <IconButton>
        <DoneIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
