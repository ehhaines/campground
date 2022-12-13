import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../offset.css";
import { findUserByUsernameThunk } from "./anon-user-thunks";
import LoadSVG from "../Spin-1s-200px.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { findFriendshipsByUserThunk } from "../Friendship/friendships-thunk";
import { findAllTripsThunk } from "../Trip/trips-thunks";
import TripsComponent from "../Trip";


const AnonUserComponent = () => {

  const params = useParams();
  const username = params.username;

  const {anonUser, anonUserLoading} = useSelector(state => state.anonUser);
  const {currentUser} = useSelector((state) => state.users);
  const {friendships, friendshipsLoading} = useSelector((state) => state.friendships);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findUserByUsernameThunk(username));
    dispatch(findFriendshipsByUserThunk(username));
    dispatch(findAllTripsThunk());
  }, []);

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
            <div className="col-4 display-6 text-secondary">
              <div className="text-center">{anonUser[0].username}</div>
              <div className="text-center">
                <button className="btn btn-primary my-3">Add Friend</button>
                {console.log(friendships)}
              </div>
            </div>
            <div className="col">
              <div>
                <div className="display-6">Bio:</div>
                {anonUser[0].bio && <div className="text-secondary">{anonUser[0].bio}</div>}
                {!anonUser[0].bio && <i className="text-secondary">Bio not available...</i>}
              </div>
              <div className="mt-3 pt-3">
                <div className="display-6">Completed trips:</div>
                <TripsComponent/>
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