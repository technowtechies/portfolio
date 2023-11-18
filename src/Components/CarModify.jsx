import React from "react";
import fortuner from "../Assests/autobotcompressed.png";
import fort from "../Assests/Group 1948 (1)-min.png";

function CarModify() {
  return (
    <div className="w-screen h-full">
      <h1 className="text-center font-extrabold text-[27px] xl:text-6xl mt-20">
        Having an Car Modification <br /> Idea?
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
          className="w-[450px] h-[300px] xl:w-[970px] xl:h-[1000px] object-contain mt-10"
        />
      </div>
    </div>
  );
}

export default CarModify;
