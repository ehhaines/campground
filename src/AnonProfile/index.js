import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import "../offset.css";
import { findUserByUsernameThunk } from "./anon-user-thunks";
import LoadSVG from "../Spin-1s-200px.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faHatCowboySide } from "@fortawesome/free-solid-svg-icons";
import { findAllTripsThunk } from "../Trip/trips-thunks";
import TripsComponent from "../Trip/completed-trips";
import { createModerationThunk, findModerationsByRangerThunk, unmodThunk } from "../Moderations/moderations-thunks";
import { findFollowsByFollowerThunk, findFollowsByFollowingThunk, followThunk, unfollowThunk } from "../Follows/follows-thunks";
import { banThunk, demoteRangerThunk, makeRangerThunk, unbanThunk } from "../Profile/users-thunks";


const AnonUserComponent = () => {

  function refreshPage(){ 
    window.location.reload(); 
  }

  const params = useParams();
  const username = params.username;

  const [park, setPark] = useState("");

  const {anonUser, anonUserLoading} = useSelector(state => state.anonUser);
  const {moderations, moderationsLoading} = useSelector(state => state.moderations);
  const {currentUser} = useSelector((state) => state.users);
  const {followers, following} = useSelector((state) => state.follows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findModerationsByRangerThunk(username));
    dispatch(findUserByUsernameThunk(username));
    dispatch(findAllTripsThunk());
    dispatch(findFollowsByFollowerThunk(username));
    dispatch(findFollowsByFollowingThunk(username));
  }, [dispatch, username]);

  const nav = useNavigate();

  return(
    <div className="eh-offset container">
      {!currentUser && 
      <div className="display-6 text-secondary text-center">
        <div className="my-3 py-3 display-1"><FontAwesomeIcon icon={faHand} color="red"/></div>
        <span>You must be <a href="/login">logged in</a> to view this page.</span>
      </div>}
      {currentUser && <div>
        {anonUserLoading &&
        <div className="text-center">
          <img src={LoadSVG} alt="...Loading..." />
        </div>}
        {(!anonUserLoading && anonUser.length > 0) &&
        <div>
          <div className="row mt-3 pt-3">
            <div className="col-md-4 display-6 text-secondary">
              <div className="text-center">{anonUser[0].isBanned && <FontAwesomeIcon icon={faBan} color="red"/>}{anonUser[0].username}{anonUser[0].isBanned && <FontAwesomeIcon icon={faBan} color="red"/>}</div>
              {!moderationsLoading && (moderations.length > 0 && <div className="text-center h5 mt-1"><FontAwesomeIcon icon={faHatCowboySide} color="brown"/> Ranger: <span onClick={() => nav(`/details/${moderations[0].parkCode}`)} style={{"cursor": "pointer"}}>{moderations[0].parkCode}</span></div>)}
              {anonUser[0].type === "ADMIN" && <div className="text-center h5 mt-1"><FontAwesomeIcon icon={faHammer} color="green"/> Admin <FontAwesomeIcon icon={faHammer} color="green"/></div>}
              <div className="row">
                <div className="col-6 text-center h5">Followers: {followers && <span>{followers.length}</span>}</div>
                <div className="col text-center h5">Following: {following && <span>{following.length}</span>}</div>
              </div>
              <div className="text-center">
                {(!followers.filter(f => f.follower === currentUser.username).length) && <button className="btn btn-primary my-3 w-50" onClick={() => {
                dispatch(followThunk(
                  {
                    follower: currentUser.username,
                    following: username
                  }
                ))
                refreshPage();
                }
                }>
                  Follow
                </button>}
                {(followers.filter(f => f.follower === currentUser.username).length > 0) && <button className="btn btn-secondary my-3 w-50" 
                  onClick={() => {
                    const filtered = followers.filter(f => f.follower === currentUser.username);
                    const id = filtered[0]._id
                    dispatch(unfollowThunk(id));
                    refreshPage();
                  }
                }>
                  Unfollow
                </button>}
              </div>
              {currentUser.type === "ADMIN" && 
              <div className="text-center">
                {!anonUser[0].isBanned && <button className="btn btn-danger my-3 w-50" onClick={() => 
                  {
                    dispatch(banThunk(username));
                  }
                }>Ban</button>}
                {anonUser[0].isBanned && <button className="btn btn-warning my-3 w-50" onClick={() => 
                  {
                    dispatch(unbanThunk(username));
                  }
                }>Unban</button>}
              </div>}
              {currentUser.type === "ADMIN" && 
              <div className="text-center">
                {anonUser[0].type === "RANGER" && <button className="btn btn-info my-3 w-50" onClick={() => 
                  {
                    dispatch(demoteRangerThunk(username));
                    dispatch(unmodThunk(anonUser[0].username));
                    refreshPage();
                  }
                }>Make user</button>}
                {anonUser[0].type === "USER" && 
                <div>
                  <button className="btn btn-info my-3 w-50" onClick={() => 
                    {
                      dispatch(makeRangerThunk(username));
                      dispatch(createModerationThunk({
                        parkCode: park,
                        ranger: anonUser[0].username
                      }));
                    }
                  }>Make ranger
                  </button>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="code">Parkcode</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="code" placeholder="ex. 'acad'" value={park} onChange={(e) => setPark(e.target.value)}/>
                  </div>
                </div>}
              </div>}
            </div>
            <div className="col-md-8">
              <div>
                <div className="display-6">Bio:</div>
                {anonUser[0].bio && <div className="text-secondary">{anonUser[0].bio}</div>}
                {!anonUser[0].bio && <div className="text-secondary mt-3">Bio not available.</div>}
              </div>
              <div className="mt-3 pt-3">
                <div className="display-6">Completed trips:</div>
                <TripsComponent user={anonUser[0]._id}/>
              </div>
            </div>
          </div>
        </div>
        }
      </div>}
    </div>
  );
}

export default AnonUserComponent;