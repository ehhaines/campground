import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { resolveAlertThunk } from "./alerts-thunks";

const AlertItem = ({alert}) => {

  const dispatch = useDispatch();

  return(
    <li className="list-group-item" style={{backgroundColor: 'rgba(217, 83, 79, 0.3)'}}>
      <div className="row">
        <div className="col-6 h5 text-danger"><FontAwesomeIcon icon={faCircleExclamation}/> ALERT</div>
        <div className="col text-end"><span className="text-secondary me-1">{alert.datePosted}</span> <button className="btn" onClick={() => {dispatch(resolveAlertThunk(alert._id))}}><FontAwesomeIcon icon={faX}/></button></div>
      </div>
      <div className="mb-2 text-secondary">
        {alert.alert}
      </div>
    </li>
  );
}

export default AlertItem;