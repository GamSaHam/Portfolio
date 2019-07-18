import React from 'react';

import Navbar from "./components/navbar";
import ShowCase from "./components/showcase";

import "./scss/App.scss";


function App() {
  return <div className="App" data-spy="scroll" data-target="#main-nav">
    <Navbar />
    <ShowCase />
  </div>;
}

export default App;