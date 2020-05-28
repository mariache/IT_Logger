import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";

const App = () => {
  useEffect(() => {
    //initialize materialize js
    M.AutoInit();
  });
  return (
    <>
      <NavBar />
      <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
      </div>
    </>
  );
};

export default App;
