import React from "react";
import info from "../Assests/pngwing.com (4) 1.png";

function Categories() {
  return (
    <div>
      <h1 className="text-center font-extrabold text-6xl mt-14">Categories</h1>
      <div className="flex  w-full mx-10  gap-3">
        <div className="px-4 py-5 bg-[#A09EFF] w-[610px] flex-1 flex justify-center flex-col gap-7 h-[1200px] rounded-2xl">
          <div className=" w-[592px] h-[592px]">
            <div className="flex justify-center relative bg-white w-[520px]  h-[360px] rounded-2xl px-2 py-0">
              <img
                src={info}
                alt=""
                srcset=""
                className="w-[519px]  h-[502px] absolute -top-36 object-cover"
              />
              <p className="uppercase absolute bottom-4 font-bold text-2xl">
                infotainment System
              </p>
            </div>
          </div>
          <div className=" w-[592px] h-[592px]">
            <div className="flex justify-center relative bg-white w-[520px]  h-[401px] rounded-2xl px-2">
              <img
                src={info}
                alt=""
                srcset=""
                className="w-[519px]  h-[502px] absolute -top-36 object-cover"
              />
              <p className="uppercase absolute bottom-4 font-bold text-xs">
                infotainment System
              </p>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex  flex-col gap-5">
          <div className="px-4 py-5 bg-[#EE5757] w-[675px] h-[647px] rounded-2xl">
            <div className="pb-4">
              <div className="flex justify-center relative bg-white w-[582px]  h-[476px] rounded-2xl px-2">
                <img
                  src={info}
                  alt=""
                  srcset=""
                  className="w-60  h-60 absolute -top-16 object-cover"
                />
                <p className="uppercase absolute bottom-4 font-bold text-xs">
                  infotai
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-5 bg-[#7FCBF5] w-[690px] h-[542px] rounded-2xl">
            {/* <div className=""> */}
            <div className="flex justify-centre relative bg-white w-[582px]  h-[377px] rounded-2xl">
              <img
                src={info}
                alt=""
                srcset=""
                className="w-60  h-60 absolute -top-16 object-cover"
              />
              <p className="uppercase absolute bottom-4 font-bold text-xs">
                infotainment System
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
