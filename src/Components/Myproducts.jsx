import React from "react";
import New from "../Assests/Frame 9.png";
import useMediaQuery from "@mui/material/useMediaQuery";

function Myproducts({ image, name }) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div
      className={`flex w-[161px] ${
        !matches ? "h-[178px]" : ""
      } xl:w-[318px] flex-col items-center gap-4  py-2 `}
    >
      <div className="relative bg-slate-50 rounded-3xl shadow-sm ">
        <img
          src={image}
          alt=""
          srcset=""
          className="w-[160px] h-[160px] xl:w-[300px] xl:h-[300px] object-cover"
        />
        <img
          src={New}
          alt=""
          srcset=""
          className="absolute top-0 left-0 w-8 h-8 object-contain"
        />
      </div>
      <p className="text-sm xl:text-xl font-bold relative bottom-2">{name}</p>
    </div>
  );
}

export default Myproducts;
