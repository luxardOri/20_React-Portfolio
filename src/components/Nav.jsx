import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const backgroundColor = "#B59194";
  return (
    <nav>
      <Link to={"/"}>
        <button style={{ backgroundColor: backgroundColor }}>About Me</button>
      </Link>
      <Link to={"/portfolio"}>
        <button style={{ backgroundColor: backgroundColor }}>Portfolio</button>
      </Link>
      <Link to={"/contactMe"}>
        <button style={{ backgroundColor: backgroundColor }}>Contact Me</button>
      </Link>
      <Link to={"/resume"}>
        <button style={{ backgroundColor: backgroundColor }}>Resume</button>
      </Link>
    </nav>
  );
}

export default Nav;
