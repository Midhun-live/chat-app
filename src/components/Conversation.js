import React from "react";
import "./myStyles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

function Conversation({props}) {
  const navigate=useNavigate();
  const lightTheme = useSelector(state=>state.themeKey)
  const theme=((lightTheme) && "dark");
  return (
    <div className={"convo-con "+theme} onClick={()=> navigate("chat-area")}>
        <p className="con-icon">{props.name[0]}</p>
        <p className={"con-title "+theme}>{props.name}</p>
        <p className="con-lastMessage">{props.message}</p>
        <p className={"con-timeStamp "+theme}>{props.timestamp}</p>
      </div>
  );
}

export default Conversation;
