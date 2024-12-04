import React, { useState } from "react";
import logo from "../Images/chat.svg";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toaster from "./Toaster";

function Login() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [showlogin, setShowLogin] = useState(false);
  const [signinStatus, setSigninStatus] = React.useState();
  const [loginStatus, setLoginStatus] = React.useState();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "https://chat-app-server-three-xi.vercel.app/user/login",
        data,
        config
      );
      console.log(response);
      setLoginStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("app/welcome");
    } catch (error) {
      console.log(error);
        setLoginStatus({
          msg: "Invalid username or password",
          key: Math.random(),
        })
      setLoading(false);
    }
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "https://chat-app-server-three-xi.vercel.app/user/register",
        data,
        config
      );
      console.log(response);
      setSigninStatus({ msg: "Success", key: Math.random() });
      navigate("app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLoginStatus({
          msg: "User with this email already exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLoginStatus({
          msg: "User name already taken",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="welcome-logo" />
        </div>
        {showlogin && (
          <div className="text-container">
            <p className="login-text">Login to your account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
            />
            <Button variant="outlined" color="secondary" onClick={loginHandler}>
              Login
            </Button>
            <p>
              don't have an account ?{" "}
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign up
              </span>
            </p>
            {loginStatus ? (
              <Toaster key={loginStatus.key} message={loginStatus.msg} />
            ) : null}
          </div>
        )}
        {!showlogin && (
          <div className="text-container">
            <p className="login-text">Create your account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              helperText=""
            />
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
              color="secondary"
              name="email"
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={signUpHandler}
            >
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log in
              </span>
            </p>
            {signinStatus ? (
              <Toaster key={signinStatus.key} message={signinStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
