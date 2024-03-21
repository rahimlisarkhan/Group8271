import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import HomeForm from "../../components/HomeForm";

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
      <HomeForm title="AboutUS" />
    </div>
  );
}

export default Home;
