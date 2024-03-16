import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

function About() {
  useEffect(() => {
    document.title = "About Sehifesi";

    return () => {
      console.log("About cixdi...");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1>About</h1>
    </div>
  );
}

export default About;
