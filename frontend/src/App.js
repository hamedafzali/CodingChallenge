import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotificationBar from "./components/common/notificationBar";
import Header from "./components/Header";
import Main from "./components/Main";
import { errorChanged } from "./store/loading";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(errorChanged(false));
  }, [dispatch]);
  const isLoading = useSelector((state) => state.loadingsReducer);
  return (
    <React.Fragment>
      {isLoading.error ? <NotificationBar /> : ""}
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
