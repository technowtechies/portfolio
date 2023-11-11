import React from "react";
import Myproducts from "./Myproducts";
import info from "../Assests/Rectangle 5.png";
import Car from "../Assests/Rectangle 5car.png";
import Leather from "../Assests/Rectangle 5 (1).png";
import Audio from "../Assests/Rectangle 5 (2).png";
import row2img1 from "../Assests/Rectangle 5 (3).png";
import row2img2 from "../Assests/Rectangle 5 (4).png";
import row2img3 from "../Assests/Rectangle 5 (5).png";
import row2img4 from "../Assests/Rectangle 5 (6).png";

function Products() {
  return (
    <div className="w-screen h-full">
      <h1 className="text-center font-extrabold text-6xl mt-14 mb-6 ">
        Products
      </h1>
      <div className="mx-20 flex gap-6 mt-14">
        <Myproducts image={info} name="infotainment" />
        <Myproducts image={Car} name="Car camera" />
        <Myproducts image={Leather} name="Leather" />
        <Myproducts image={Audio} name="Audio system" />
      </div>
      <div className="mx-20 flex gap-6 mt-14">
        <Myproducts image={row2img1} name="infotainment" />
        <Myproducts image={row2img2} name="Car camera" />
        <Myproducts image={row2img3} name="Leather" />
        <Myproducts image={row2img4} name="Audio system" />
      </div>
      <div className="mx-20 flex gap-6 mt-14">
        <Myproducts image={row2img1} name="Perfume" />
        <Myproducts image={row2img2} name="Car Charger" />
        <Myproducts image={row2img3} name="DVR Camera" />
        <Myproducts image={row2img4} name="Car cleaning kit" />
      </div>
    </div>
  );
}

export default Products;
