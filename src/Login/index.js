import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const LoginComponent = () => {
  const [isLogin, setLogin] = useState(true);
  return(
    <div>
      <div className="eh-center w-100 eh-background" style={{
        backgroundImage: `url("/images/canyonlands.jpg")`
      }}>
        <div className="w-50 h-75 overflow-auto">
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item" onClick={() => setLogin(true)}>
                <div className={`nav-link text-dark ${isLogin ? "active border-white" : "bg-secondary"}`}>Login</div>
              </li>
              <li className="nav-item" onClick={() => setLogin(false)}>
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