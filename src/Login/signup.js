import React from "react";

const Signup = () => {
  return(
    <div className="bg-white rounded-bottom">
      <div className="row">
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mt-3 ms-3 mb-2" aria-describedby="inputGroup-sizing-default" placeholder="First name"/>
        </div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mt-3 me-3 mb-2" aria-describedby="inputGroup-sizing-default" placeholder="Last name"/>
        </div>
      </div>
      <div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Username"/>
        </div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Email"/>
        </div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Password"/>
        </div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mx-3 mt-2 mb-2" aria-describedby="inputGroup-sizing-default" placeholder="Confirm Password"/>
        </div>
      </div>
      <button className="btn btn-primary mx-3 mb-3 mt-2">Submit</button>
    </div>
  );
}

export default Signup;