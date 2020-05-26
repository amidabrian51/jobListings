import React from "react";
import "./styles.css";
import Jobs from "./components/Jobs/jobs.component";
import NavBar from "./components/navBar/navBar.component";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Jobs />
    </div>
  );
}
