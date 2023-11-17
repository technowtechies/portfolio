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
import row3img1 from "../Assests/perfume s.png";
import row3img2 from "../Assests/carCharges s.png";
import row3img3 from "../Assests/DVRcamera s.png";
import row3img4 from "../Assests/carCleaningKit s.png";

function Products() {
  return (
    <div className="w-screen h-full" id="product">
      <h1 className="text-center font-extrabold text-[20px] xl:text-6xl mt-14">
        Products
      </h1>
      {/* <div className="mx-20 grid gap-6 mt-14">
        <Myproducts image={info} name="Infotainment System" />
        <Myproducts image={Car} name="360 Car Camera" />
        <Myproducts image={Leather} name="Leather Seat Cover" />
        <Myproducts image={Audio} name="Audio system" />
      </div>
      <div className="mx-20 flex gap-6 mt-14">
        <Myproducts image={row2img1} name="Fog Lamp" />
        <Myproducts image={row2img2} name="Car Speaker" />
        <Myproducts image={row2img3} name="Alloy Wheels" />
        <Myproducts image={row2img4} name="3M Sun Control Film" />
      </div>
      <div className="mx-20 flex gap-6 mt-14">
        <Myproducts image={row3img1} name="Perfume" />
        <Myproducts image={row3img2} name="Car Charger" />
        <Myproducts image={row3img3} name="DVR Camera" />
        <Myproducts image={row3img4} name="Car cleaning kit" />
      </div> */}
      <div className="px-12 xl:mx-24 mr-6 grid grid-cols-2  xl:grid-cols-3 gap-20 mt-14">
        <Myproducts image={info} name="Infotainment System" />
        <Myproducts image={Car} name="360 Car Camera" />
        <Myproducts image={Leather} name="Leather Seat Cover" />
        <Myproducts image={Audio} name="Audio system" />
        <Myproducts image={row2img1} name="Fog Lamp" />
        <Myproducts image={row2img2} name="Car Speaker" />
        <Myproducts image={row2img3} name="Alloy Wheels" />
        <Myproducts image={row2img4} name="3M Sun Control Film" />
        <Myproducts image={row3img1} name="Perfume" />
        <Myproducts image={row3img2} name="Car Charger" />
        <Myproducts image={row3img3} name="DVR Camera" />
        <Myproducts image={row3img4} name="Car cleaning kit" />
      </div>
    </div>
  );
}

export default Products;
