import React from "react"
import DefaultPage from "../Default";
import Sobre from "../Sobre";
import Listing from "../Listing";
import Banner from "../Banner";

function Home() {
  return (
    <div className="containerHome">
      <Banner />
      <DefaultPage />
      <Listing />
      <Sobre />
    </div>
  );
}
 
export default Home;
