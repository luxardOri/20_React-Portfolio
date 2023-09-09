import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Resume() {
  const fontColor = "white";
  return (
    <div>
      <Header title="Resume" bgColor="#B07C9E" />
      <div style={{ color: fontColor }}>This is where my resume goes!</div>
      <Footer title="Resume" bgColor="#B07C9E" />
    </div>
  );
}

export default Resume;
