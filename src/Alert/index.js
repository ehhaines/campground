import React from "react";

const AlertItem = ({alert}) => {
  return(
    <li className="list-group-item" style={{backgroundColor: 'rgba(217, 83, 79, 0.3)'}}>
      <div className="row">
        <div className="col-6 h5 text-danger">ALERT</div>
        <div className="col text-end me-3 pe-2">{alert.datePosted}</div>
      </div>
      <div className="mb-2">
        {alert.alert}
      </div>
    </li>
  );
}

export default AlertItem;