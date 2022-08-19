import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { firebaseAuth } from "../firebase-configs";
import { useNavigate } from "react-router-dom";

import image from "../assets/logo.png";
import "./nish.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  var sectionStyle = {
    width: "100%",
    height: "350px",
    backgroundImage: "url(" + { image } + ")",
  };

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange() {
    navigate("/signin");
  }

  return (
    <div className="container_nish">
      <div
        className="logo_img"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "100%",
          height: "350px",
        }}
      ></div>

      <div className="signUp_form">
        <h1>Welcome Back</h1>
        <h3>Sign In to continue</h3>
        <br />
        <form>
          <div className="input_div">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="input_div">
            <input
              className="pass"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="input_div">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
            ></input>
            <h4>Forgot Password ?</h4>
          </div>
          <div className="button_submit" onClick={handleChange}>
            <button onClick={handleSignIn}>Sign Up</button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default SignUp;
