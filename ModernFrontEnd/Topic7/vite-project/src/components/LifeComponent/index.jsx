import React, { useEffect, useLayoutEffect, useState } from "react";

function LifeComponent() {
  const [data, setData] = useState();

  const [name, setName] = useState("Merhaba");
  const [params, setParams] = useState("Merhaba");

  //   function callback() {}

  //   const arr = [];

  //   useEffect(callback, arr);

  //   setData(10);

  useEffect(() => {
    //? ComponetDidMount
    console.log("Component yaradildi.");
    setData(10);

    // start();

    const a = localStorage.getItem("name");

    window.addEventListener("scroll", function () {});

    // moviesleri getir GET
    // filan isi gor

    //? ComponetUnMount
    const nestedCallback = () => {
      console.log("Componentden cixdiq.... dagildi");
      setData(0);
      localStorage.removeItem("name");
      setForm({});
      //   firebase.realtime.off()
    };

    return nestedCallback;
  }, []);

  useEffect(() => {
    //? ComponetDidMount
    //? ComponetUpdateMount
    console.log("Melumat Update olundu");
    // firebase.connect();

    // getMovies(name);
  }, [name]);

  //   useLayoutEffect(() => {
  //     document.body.style.background = "red";
  //     document.title = "Sirrruss";

  //     console.log("Component yardilir....");
  //   }, []);

  return (
    <div>
      LifeComponent
      <h1>{name}</h1>
      <button
        onClick={() =>
          setName((prev) => (prev === "Hello" ? "Merhaba" : "Hello"))
        }
      >
        Click
      </button>
    </div>
  );
}

export default LifeComponent;
