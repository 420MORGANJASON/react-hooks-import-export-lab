import React from "react";
import { username1, city1 } from "../data/user";


function Home() {
  return (
    <div id="home">
      <h1>
        {username1} is a Web Developer from {city1}
      </h1>
    </div>
  );
}

export default Home;
