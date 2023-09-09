import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function AboutMe() {
  const fontColor = "white";
  return (
    <div>
      <Header title="About Me" bgColor="#B07C9E" />
      <div style={{ color: fontColor }}> This is where about me goes</div>
      <Footer title="About Me" bgColor="#B07C9E" />
    </div>
  );
}

export default AboutMe;
