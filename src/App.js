// src/App.js
import React from "react";
import "./App.css"; // Import the global styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center ">
        <div className="text-9xl text-white mb-8">We're Coming Soon!</div>
      </div>
    </div>
  );
};

export default App;
