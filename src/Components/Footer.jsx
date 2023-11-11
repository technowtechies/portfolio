import React from "react";
import gradient from "../Assests/gradiant.jpeg";

function Footer() {
  return (
    <div className="w-screen h-full flex px-20">
      <div className="flex-1 items-center justify-center w-full">
        <h1 className="font-bold text-6xl  w-full  ">
          Most Promising <span className="text-[#4A69E2] ">Car</span>
          <br />
          <h1 className="text-[#4A69E2]"> Accessories</h1>
        </h1>
        <div className="mt-10 w-[434px] h-[700px] relative ">
          <img
            src={gradient}
            alt=""
            srcset=""
            className="opacity-25 absolute "
          />
          <h1 className="font-bold text-2xl text-center py-5"> Reach us</h1>
          <p className="py-5 ">+91 9199955502</p>
          <p className="w-[290px] py-5 ">
            241, Double Road,bannerghata road Bengaluru, Karnataka 560-100
          </p>
          <p className=" py-5">Carvibes555@gmail.com</p>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

export default Footer;
