import React from "react";

import { useNavigate } from "react-router-dom";

import image from "../assets/logo.png";
import "./nish.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container_logo">
      <img src={image} height="600px" />
      <div className="icon_container">
        <div className="icon" onClick={() => navigate("/signup")}>
          <ion-icon name="person-add-outline"></ion-icon>
          <h5>Sign Up</h5>
        </div>
        <div className="icon" onClick={() => navigate("/signin")}>
          <ion-icon name="person-outline"></ion-icon>
          <h5>Sign In</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
