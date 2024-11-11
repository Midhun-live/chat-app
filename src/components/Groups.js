import React from "react";
import logo from "../Images/chat.svg";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence,motion } from "framer-motion"


function Groups(){
    const dispatch=useDispatch()
    const lightTheme = useSelector(state=>state.themeKey)
    const theme=((lightTheme) && "dark");
    return(
        <AnimatePresence>
            <motion.div
             initial={{ opacity:0, scale:0}}
             animate={{opacity:1,scale:1}}
             exit={{opacity:0,scale:0}}
             transition={{
                ease:"anticipate",
                duration:"0.3"
             }}
             className="list-container">
                <div className={"ug-header " + theme}>
                    <img
                        src={logo}
                        style={{height:"2rem", width:"2rem"}}
                    />
                    <p className={"ug-title " + theme}>Online Groups</p>
                </div>
                <div className={"sb-search " + theme}>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                    <input placeholder="search" className={"search-ip " + theme} />
                </div>
                <div className={"ug-list " + theme}>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale : 1.01 }}
                    className={"list-item"}
                    >
                        <p className={"con-icon " + theme}>T</p>
                        <p className={"con-title "}>Test Group</p>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Groups;