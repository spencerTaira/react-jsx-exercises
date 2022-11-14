"use strict";

function Alert(props) {
  let nameOfClass = `alert alert-${props.alertType}`;

  return (
    <div className={nameOfClass} role="alert">
        {props.message}
    </div>
  );
}