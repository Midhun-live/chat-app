import React from "react";
import logo from "../Images/chat.svg";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";


function User(){
    const dispatch=useDispatch()
    const lightTheme = useSelector(state=>state.themeKey)
    const theme=((lightTheme) && "dark");
    return(
        <div className="list-container">
            <div className={"ug-header "+theme}>
                <img
                    src={logo}
                    style={{height:"2rem", width:"2rem"}}
                />
                <p className={"ug-title "+theme}>Online Users</p>
            </div>
            <div className={"sb-search "+theme}>
                <IconButton>
                <SearchIcon />
                </IconButton>
                <input placeholder="search" className={"search-ip "+theme} />
            </div>
            <div className={"ug-list "+theme}>
                <div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div>
                <div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div><div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div><div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div><div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div><div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div><div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div><div className="list-item">
                    <p className={"con-icon "+theme}>T</p>
                    <p className="con-title">Test user</p>
                </div>
            </div>
        </div>
    );
}

export default User;