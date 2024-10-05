import React from "react";
import { useState } from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LightModeIcon from "@mui/icons-material/LightMode"
import NightlightIcon from '@mui/icons-material/Nightlight';
import ContrastIcon from "@mui/icons-material/Contrast";
import SearchIcon from "@mui/icons-material/Search";
import Conversation from "./Conversation";
import { useNavigate } from "react-router-dom";
import { light } from "@mui/material/styles/createPalette";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const lightTheme = useSelector(state=>state.themeKey)
  const icon = "icon " + ((lightTheme) && "dark")
  const [conversations,setConversations]  = useState([
    {
      "name":"Midhun",
      "message":"Hi",
      "timestamp":"today"
    },
    {
      "name":"Rahul",
      "message":"Hello",
      "timestamp":"today"
    },
    {
      "name":"Aathish",
      "message":"Good Eve!",
      "timestamp":"today"
    }
  ])
  return (
    <div className="sidebar-con">
      <div className={"sb-header " + ((lightTheme) && "dark")}>
          <IconButton>
            <AccountCircleIcon className={icon}/>
          </IconButton>
          <IconButton className={icon} onClick={()=>
            navigate("users")
          }>
            <PersonAddIcon className={icon} />
          </IconButton>
          <IconButton onClick={()=>
            navigate("groups")
          }>
            <GroupAddIcon className={icon} />
          </IconButton>
          <IconButton onClick={()=>
            navigate("creategroups")
          }>
            <AddCircleOutlineIcon className={icon} />
          </IconButton>
          <IconButton onClick={()=>dispatch(toggleTheme())}>
            {lightTheme ? <LightModeIcon className={icon}/> : <NightlightIcon className={icon} />}
          </IconButton>
      </div>
      <div className={"sb-search " + ((lightTheme) && "dark")}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className={"search-ip " + ((lightTheme) && "dark")}/>
      </div>
      <div className={"sb-convo " + ((lightTheme) && "dark")}>
        {conversations.map((conversation)=>{
          return (<Conversation props={conversation} key={conversation.name} />)
        })}
      </div>
    </div>
  );
}

export default SideBar;
 