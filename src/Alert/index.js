import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { resolveAlertThunk } from "./alerts-thunks";
import { findModerationsByRangerThunk } from "../Moderations/moderations-thunks";


const AlertItem = ({alert}) => {

  const {currentUser} = useSelector(state => state.users);
  const {moderations, moderationsLoading} = useSelector(state => state.moderations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findModerationsByRangerThunk(alert.ranger));
  }, []);

  return(
    <div>
      {!moderationsLoading && <li className="list-group-item" style={{backgroundColor: 'rgba(217, 83, 79, 0.3)'}}>
        <div className="row">
          <div className="col-6 h5 text-danger"><FontAwesomeIcon icon={faCircleExclamation}/> ALERT</div>
          <div className="col text-end">
            <span className="me-1 text-secondary">{alert.datePosted}</span>
            {(currentUser && moderations.length > 0) && 
              ((currentUser.type === "RANGER" && currentUser._id === moderations[0].ranger) && 
              <button className="btn" onClick={() => {dispatch(resolveAlertThunk(alert._id))}}><FontAwesomeIcon icon={faX}/></button>)}
          </div>
        </div>
        <div className="mb-2 text-secondary">
          {alert.alert}
        </div>
      </li>}
    </div>
  );
}

export default AlertItem;