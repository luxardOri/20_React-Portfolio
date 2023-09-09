import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Project from "../Project";

function Portfolio() {
  const fontColor = "white";
  return (
    <div>
      <Header title="Portfolio" bgColor="#B07C9E" />
      <div style={{ color: fontColor }}>This is where my portfolio goes!</div>
      <Project />
      <Footer title="Portfolio" bgColor="#B07C9E" />
    </div>
  );
}

export default Portfolio;
