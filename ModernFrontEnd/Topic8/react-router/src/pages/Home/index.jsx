import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

function Home() {
  useEffect(() => {
    document.title = "Home Sehifesi";

    return () => {
      console.log("Homedan cixdi...");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
}

export default Home;
