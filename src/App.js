import CarModify from "./Components/CarModify";
import Categoriy from "./Components/Categoriy";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ShowBrands from "./Components/ShowBrands";
import Gallabox from "./Components/gallabox";
import BottomFooter from "./Components/bottomFooter";
import React from "react";
import "./App.css"; // Import the global styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App w-full h-full">
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
};

export default App;
