import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function ContactMe() {
  const fontColor = "white";
  return (
    <div>
      <Header title="Contact Me" bgColor="#B07C9E" />
      <div style={{ color: fontColor }}> This is where about me goes</div>
      <Footer title="Contact Me" bgColor="#B07C9E" />
    </div>
  );
}

export default ContactMe;
