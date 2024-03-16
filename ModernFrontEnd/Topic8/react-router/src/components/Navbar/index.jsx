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
      </ul>
    </nav>
  );
}

export default Navbar;
