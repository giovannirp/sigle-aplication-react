import React from "react"
import DefaultPage from "../Default";
import Sobre from "../Sobre";
import Listing from "../Listing";
import Banner from "../Banner";
import Header from "../../components/Header";

function Home() {
  return (
    <div className="containerHome">
      <Header />
      <Banner />
      <DefaultPage />
      <Listing />
      <Sobre />
    </div>
  );
}
 
export default Home;
