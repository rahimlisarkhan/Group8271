import React from "react";
import Header from "../../components/Header";
import LeftSide from "../../components/LeftSide";
import Input from "../../components/Input";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSide />
        <div className=" w-full lg:w-4/5 p-6  lg:px-40">
          <h2 className="text-4xl text-bold uppercase">Todo app</h2>
          <Input label="Todo text" placeholder="Your todo" />
          <Input label="Label" placeholder="Your todo" />
          <Input label="Label" placeholder="Your todo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
