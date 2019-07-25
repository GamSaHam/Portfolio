import React from 'react';

import Navbar from "./components/navbar";
import ShowCase from "./components/showcase";
import NewsLetter from "./components/newsletter";
import Boxes from "./components/boxes";
import About from "./components/about";


function App() {
  return <div className="App" data-spy="scroll" data-target="#main-nav">
    <Navbar />
    <ShowCase />
    <NewsLetter />
    <Boxes />
    <About />

  </div>;
}

export default App;