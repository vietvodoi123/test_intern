import React from "react";
import Header from "./header/Header";
import Features from "./features/Features";
import Galleries from "./galleries/Galleries";

function Home() {
  return (
    <div className="main">
      <Header />
      <Features />
      <Galleries />
    </div>
  );
}

export default Home;
