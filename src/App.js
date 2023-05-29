import React from "react";
//import { useState } from "react";
import "./App.css";
import AnimalsMemoryGame from "./components/AnimalsMemoryGame";
import OppositesMemoryGame from "./components/OppositesMemoryGame";

function App() {
  return (
    <div className="App">

      <OppositesMemoryGame />
     

      <AnimalsMemoryGame />
    </div>
  );
}
export default App;
