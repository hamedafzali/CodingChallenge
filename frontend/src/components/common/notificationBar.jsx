import React from "react";
const NotificationBar = () => {
  return (
    <>
      <div className="notification-top-bar">
        <h6>
          Could not receive data. your connection may not be established or the
          server temporary is unreachable.
          <button onClick={() => window.location.reload()}>refresh</button>
        </h6>
      </div>
    </>
  );
};

export default NotificationBar;
