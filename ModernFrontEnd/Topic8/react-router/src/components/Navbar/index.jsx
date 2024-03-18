import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      {/* <Link className=""  to="/"> Home</Link> */}

      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/blog")}>Blog</li>
        <li onClick={() => navigate("/setting")}>Setting</li>
      </ul>

      <button onClick={() => navigate("/movies")}>Get Started Movies</button>

      <hr />
    </nav>
  );
}

export default Navbar;
