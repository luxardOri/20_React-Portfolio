import React, { useState } from "react";
import { useTheme } from "../utils/ThemeContext";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer(props) {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <a href="https://github.com/luxardOri">
        <i class="bi bi-github bi-2x"></i>
      </a>
    </div>
  );
}

export default Footer;
