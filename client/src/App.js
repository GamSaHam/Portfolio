import React from 'react';

import Menu from "./components/menu";
import ShowCase from "./components/showcase";
import NewsLetter from "./components/newsletter";
import Boxes from "./components/boxes";
import About from "./components/about";
import Authors from "./components/authors";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return <div className="App" data-spy="scroll" data-target="#main-nav">
    <Menu />
    <ShowCase />
    <NewsLetter />
    <Boxes />
    <About />
    <Authors />
    <Contact />
    <Footer />

  </div>;
}

export default App;