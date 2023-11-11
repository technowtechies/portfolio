import React from "react";

function Showcatproducts({ image }) {
  return (
    <div>
      <div className="absolute bg-black p-7 ">
        <img src={image} alt="" srcset="" className="w-40 relative top-0" />
        <p>INFOTAINMET SYSTEM</p>
      </div>
    </div>
  );
}

export default Showcatproducts;
