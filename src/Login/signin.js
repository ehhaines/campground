import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../Profile/users-thunks";

const Signin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
  return(
    <div className="bg-white rounded-bottom">
      <div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mx-3 mb-2 mt-3" aria-describedby="inputGroup-sizing-default" placeholder="Username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}/>
        </div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
      </div>
      <button
          className="btn btn-primary mx-3 mb-3 mt-2"
          onClick={handleLoginBtn}
      >
          Enter
      </button>
        {
            error &&
            <div className="alert alert-danger">
                {error}
            </div>
        }
        {
            currentUser &&
            <h2>Welcome {currentUser.username}</h2>
        }
    </div>
  );
}

export default Signin;