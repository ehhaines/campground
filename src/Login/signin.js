import React from "react";

const Signin = () => {
    return(
        <div className="bg-white rounded-bottom">
            <div>
                <div className="input-group mb-3 col">
                    <input type="text" className="form-control mx-3 mb-2 mt-3" aria-describedby="inputGroup-sizing-default" placeholder="Email"/>
                </div>
                <div className="input-group mb-3 col">
                    <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Password"/>
                </div>
            </div>
            <button className="btn btn-primary mx-3 mb-3 mt-2">Enter</button>
        </div>
    );
}

export default Signin;