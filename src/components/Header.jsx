import React, { useState } from "react";
import { useTheme } from "../utils/ThemeContext";
import Nav from "./Nav";

function Header(props) {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <h1>Luxard: {props.title}</h1>
      <Nav />
    </div>
  );
}

export default Header;
