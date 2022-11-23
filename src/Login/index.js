import React from "react";
import Signin from "./signin";
import Signup from "./signup";
import chooseBackground from "../background";

const LoginComponent = () => {
  const currentBackground = chooseBackground();
  let isLogin = true;
  return(
    <div>
      <div className="eh-center w-100 eh-background" style={{
        backgroundImage: `url("/images/${currentBackground.image}")`
      }}>
        <div className="w-50">
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <div className={`nav-link text-dark ${isLogin ? "active border-white" : "bg-secondary"}`}>Login</div>
              </li>
              <li className="nav-item">
                <div className={`nav-link text-dark ${!isLogin ? "active border-white" : "bg-secondary"}`}>Sign up</div>
              </li>
            </ul>
          </div>
          <div>
            {isLogin && <Signin/>}
            {!isLogin && <Signup/>}
          </div>
        </div>
      </div>
    </div>
  );
}



export default LoginComponent;