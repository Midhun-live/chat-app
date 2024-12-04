import "./App.css";
import MainComponent from "./components/MainComponent";
import Login from "./components/Login.js";
import { Routes,Route } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import ChatArea from "./components/ChatArea.js";
import CreateGroups from "./components/CreateGroups.js";
import Users from "./components/Users.js";
import Groups from "./components/Groups.js";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"app " + ((lightTheme) && "dark")}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="app" element={<MainComponent/>}>
          <Route path="welcome" element={<Welcome/>}/>
          <Route path="chat/:_id" element={<ChatArea/>}/>
          <Route path="creategroups" element={<CreateGroups/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="groups" element={<Groups/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
