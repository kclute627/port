import React from "react";
import Left from "./Left";
import Intrests from "./Intrests";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home">
      <Left />
      <div className="home-right" id="left">
        <Projects />
        <Intrests />
      </div>
      <div className="home-background" id="background"></div>
    </div>
  );
};

export default Home;
