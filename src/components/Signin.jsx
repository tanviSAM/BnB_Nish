import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase-configs";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import image from "../assets/logo.png";
import "./nish.css";

function SignIn() {
  var sectionStyle = {
    width: "100%",
    height: "350px",
    backgroundImage: "url(" + { image } + ")",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  function handleChange() {
    navigate("/signin");
  }

  return (
    <div className="container_nish">
      {/* <div className="logo_img" >
        <img src={image} height="350px" />
        <section style={ sectionStyle }/>

      </div> */}
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
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="input_div">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="button_submit">
            <button onClick={() => navigate("/")}>Sign In</button>
          </div>
        </form>
        <div onClick={handleChange}>
          <br />
          Do not have account ?{" "}
          <span className="signUp_tag" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </div>
        <br />
      </div>
    </div>
  );
}

export default SignIn;
