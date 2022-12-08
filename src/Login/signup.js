import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../Profile/users-thunks"

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (username.length === 0) {
            setError('Username cannot be empty')
            return
        }
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password, firstName, lastName, email}
        dispatch(registerThunk(newUser))

    }
  return(
    <div className="bg-white rounded-bottom overflow-hidden">
      <div className="row">
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mt-3 ms-3 mb-2" aria-describedby="inputGroup-sizing-default" placeholder="First name"
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}/>
        </div>
        <div className="input-group mb-3 col">
          <input type="text" className="form-control mt-3 me-3 mb-2" aria-describedby="inputGroup-sizing-default" placeholder="Last name"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}/>
        </div>
      </div>
      <div className="input-group mb-3 col">
        <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="input-group mb-3 col">
        <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}/>
      </div>
      <div className="input-group mb-3 col">
        <input type="text" className="form-control mx-3 my-2" aria-describedby="inputGroup-sizing-default" placeholder="Password"
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}/>
      </div>
      <div className="input-group mb-3 col">
        <input type="text" className="form-control mx-3 mt-2 mb-2" aria-describedby="inputGroup-sizing-default" placeholder="Confirm Password"
        value={validatePassword}
        onChange={(e) => setValidatePassword(e.target.value)}/>
      </div>
      <button className="btn btn-primary mx-3 mb-3 mt-2" onClick={handleRegisterBtn}>
          Submit
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

export default Signup;