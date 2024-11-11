import React from "react";
import logo from "../Images/chat.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";


function Welcome() {
  const lightTheme=useSelector((state)=>state.themekey);
  const userData= JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav=useNavigate();
  if(!userData){
    console.log("usernot authenticated")
    nav("/")
  }
  return (
    <div className={"welcome-container " + (lightTheme ? " " : "dark") }>
      <motion.img drag whileTap={{scale:1.5,rotate:360}} src={logo} alt="logo" className="welcome-logo" />
      <b>Hi {userData.data.name} 👋🏻</b>
      <p>View and text directly to people present in the chat rooms</p>
    </div>
  );
}

export default Welcome;
