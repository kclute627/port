import React from "react";
import Left from "./Left";
import Projects from "./Projects";


const Home = () => {
  return (
    <div className="home">
      <Left />
      <div className="home-right" id="left">
        <Projects title="Websites" type='website' />
        <Projects title="Mobile Apps" type='app' />
        
        {/* 
        <Projects title="Current Intrests" /> */}
       
      </div>
      <div className="home-background" id="background"></div>
 
    </div> 
  );
};

export default Home;
