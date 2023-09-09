import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import myImage from "../../assets/images/tsuki2.jpeg";

function AboutMe() {
  const fontColor = "white";
  return (
    <div>
      <Header title="About Me" bgColor="#B07C9E" />
      <br />
      <img
        src={myImage}
        alt="Description of the image"
        style={{ width: "200px", height: "150px" }}
      />
      <div style={{ color: fontColor }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos
        non error, facilis atque molestiae cum voluptate aut beatae sit a nisi
        doloribus repudiandae accusamus earum porro incidunt. Eaque, voluptates!
      </div>
      <div style={{ color: fontColor }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos
        non error, facilis atque molestiae cum voluptate aut beatae sit a nisi
        doloribus repudiandae accusamus earum porro incidunt. Eaque, voluptates!
      </div>
      <div style={{ color: fontColor }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos
        non error, facilis atque molestiae cum voluptate aut beatae sit a nisi
        doloribus repudiandae accusamus earum porro incidunt. Eaque, voluptates!
      </div>
      <br />
      <Footer title="About Me" bgColor="#B07C9E" />
    </div>
  );
}

export default AboutMe;
