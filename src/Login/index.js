import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LoginComponent = () => {
  const [isLogin, setLogin] = useState(true);
  const nav = useNavigate();
  return(
    <div>
      <button className="position-absolute btn ms-3 mt-3 bg-dark" onClick={() => nav("/")}>
        <i><FontAwesomeIcon icon={faArrowLeft} color="white"/></i>
      </button>
      <div className="eh-center w-100 eh-background" style={{
        backgroundImage: `url("/images/canyonlands.jpg")`
      }}>
        <div className="w-50 h-75 overflow-auto">
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item" onClick={() => setLogin(true)}>
                <button className={`nav-link text-dark ${isLogin ? "active border-white" : "bg-secondary"}`}>Login</button>
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