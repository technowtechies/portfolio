import React from "react";
import fortuner from "../Assests/fortuner-19188 1.png";
import fort from "../Assests/Group 1947 (1).png";

function CarModify() {
  return (
    <div className="w-screen h-full">
      <h1 className="text-center font-extrabold text-[20px] xl:text-6xl mt-20">
        Have an Car Modification <br /> Idea?
        <span className="text-[#4A69E2]"> Let’s Discuss</span>
      </h1>
      {/* <div className="flex items-center justify-center">
        <div className="mt-14  rounded-full bg-[#FFA52F] w-[900px] h-[900px] relative">
          <img
            src={fortuner}
            alt=""
            srcset=""
            className="w-[1200px] h-[650px] object-cover absolute top-28 -left-4  "
          />
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <img
          src={fort}
          alt=""
          srcset=""
          className="w-[400px] h-[250px] xl:w-[1000px] xl:h-[1000px] object-contain mt-10"
        />
      </div>
    </div>
  );
}

export default CarModify;
