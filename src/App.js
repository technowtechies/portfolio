import Home from "./Pages/Home";

import React from "react";
import "./App.css"; // Import the global styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCutomer from "./Pages/AddCutomer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCustomer" element={<AddCutomer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
