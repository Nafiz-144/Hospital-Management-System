import React from "react";
import Hero from "../Hero";
import Biography from "../Biography";
import Department from "../Department";
import MessageFrom from "../MessageForm";

const Home = () => {
  return (
    <>
      <Hero title={"Welcome tothejungle......"} imageUrl={"/hero.png"} />
      <Biography />
      <Department />
      <MessageFrom />
    </>
  );
};
export default Home;
