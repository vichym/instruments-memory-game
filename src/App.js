import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Board from "./components/Board";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
