import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Swipper from "./Components/Swipper/Swipper";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/OurServices/Services";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Swipper />
      <Services/>

    </div>
  );
};

export default App;
