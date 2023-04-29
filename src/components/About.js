import React from "react";
import { image1 } from '../data/user';



function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image1} alt="I made this" />
    </div>
  );
}

export default About;