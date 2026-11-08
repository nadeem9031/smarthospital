import React from "react";
import Home from "./Home";
import Appointment from "./Appointment";
import Log from "./Log";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Log />;
  }

  if (path === "/appointment") {
    return <Appointment />;
  }

  return <Home />;
}

export default App;