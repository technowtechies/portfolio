import React from "react";
import ShowBrands from "../Components/ShowBrands";
import Gallabox from "../Components/gallabox";
import Categoriy from "../Components/Categoriy";
import Products from "../Components/Products";
import CarModify from "../Components/CarModify";
import Footer from "../Components/Footer";
import BottomFooter from "../Components/bottomFooter";
import Home from "../Components/Home";

function HomePage() {
  return (
    <div>
      <Home />
      <ShowBrands />
      <Gallabox />
      <Categoriy />
      <Products />
      <CarModify />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default HomePage;
