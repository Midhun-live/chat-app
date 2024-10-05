import { IconButton } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";

function CreateGroups() {
  const lightTheme = useSelector(state=>state.themeKey)
  const theme=((lightTheme) && "dark");
  return (
    <div className={"creategroup-container "+theme}>
      <input placeholder="Enter group name" className={"search-ip "+theme} />
      <IconButton>
        <DoneIcon className={theme}/>
      </IconButton>
    </div>
  );
}

export default CreateGroups;
