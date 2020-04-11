import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  // clearAlert
  const alertContext = useContext(AlertContext);

  const { alert, clearAlert } = alertContext;

  return (
    alert !== null && (
      // the alert is based off of the type passed in, which is a prop
      <div className='alert'>
        <i className='fas fa-info-circle' /> {alert.msg}
        <button className='button btn_alert' onClick={clearAlert}>
          x
        </button>
      </div>
    )
  );
};

export default Alert;
