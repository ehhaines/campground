import React from "react";
import chooseBackground from "../background";

const LoginComponent = () => {
  const currentBackground = chooseBackground();
  let isLogin = true;
  return(
    <div className="eh-center w-100 eh-background" style={{
      backgroundImage: `url("/images/${currentBackground.image}")`
    }}>
      <div className='w-50'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <div className={`nav-link text-dark ${isLogin ? "active" : "bg-primary"}`}>Login</div>
          </li>
          <li className="nav-item">
            <div className={`nav-link text-dark ${!isLogin ? "active" : "bg-primary"}`}>Sign up</div>
          </li>
        </ul>
      </div>
      <div className="fixed-bottom mb-3 ms-3 p-2 fs-6 bg-warning eh-trim rounded">
        {currentBackground.park}
      </div>
    </div>
  );
}

export default LoginComponent;