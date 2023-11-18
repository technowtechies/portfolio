import React, { useState } from "react";
import Carimage from "../Assests/image 14-min.png";
import logo from "../Assests/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
export default function Home() {
  const matches = useMediaQuery("(min-width:600px)");
  const [show, setshow] = useState(false);

  const form = () => {
    window.location.href = "#form";
  };

  const toggleNav = () => {
    setshow(!show);
  };

  const product = () => {
    window.location.href = "#product";
  };

  return (
    <div className="w-screen h-full" id="home">
      <div className="h-screen w-full relative">
        <img
          src={Carimage}
          alt=""
          className={`absolute w-full h-screen   ${
            !matches ? "object-cover" : "object-cover"
          } `}
          style={{ overflowY: "auto", overflowX: "hidden" }}
        />
        <div className=" text-white rounded-lg  mx-12 relative top-5  h-16 px-4 flex items-center justify-between ">
          {/* logo */}
          <img
            src={logo}
            alt=""
            className="w-[107px] h-[80px]  xl:w-[200px] xl:h-[350px]  object-contain "
          />
          {/* div NAv LInks */}
          {!matches ? (
            show ? (
              <div className="fixed  top-0 left-0 z-50 bg-white w-[60%] trasnsiton duration-1000 h-full flex flex-col items-end px-5">
                <IoMdClose
                  onClick={toggleNav}
                  className="mt-8 text-black text-2xl"
                />
                <div className="flex w-full items-center gap-10 justify-end px-4 flex-col">
                  <ul className="flex justify-between gap-10 flex-col text-black">
                    <li>
                      <a href="#Home">Home</a>
                    </li>
                    <li>
                      <a href="#product">Product</a>
                    </li>
                    <li>
                      <a href="#aboutus">About us</a>
                    </li>
                  </ul>
                  <button
                    className="bg-[#FFA52F] text-black font-bold py-2 px-4 rounded-lg text-[12px]"
                    onClick={form}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            ) : (
              <GiHamburgerMenu onClick={toggleNav} />
            )
          ) : (
            <div className="flex w-full items-center gap-10 justify-end px-4">
              <ul className="flex justify-between gap-10">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#product">Product</a>
                </li>
                <li>
                  <a href="#aboutus">About us</a>
                </li>
              </ul>
              <button
                className="bg-[#FFA52F] text-black font-bold py-2 px-4 rounded-lg text-[12px]"
                onClick={form}
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
        {/* eliation text */}
        <div className="text-white absolute bottom-14 left-20 xl:left-32 ">
          <div className="flex flex-col items-start">
            <h1 className="text-[22px]  xl:text-[80px] xl:text-start font-extrabold text-slate-300  leading-[1.1]">
              Elevate your ride with <br />
              premium car Accessories
            </h1>
            <div className={!matches ? "flex justify-center w-full" : ""}>
              <button
                className="bg-[#FFA52F] text-black font-bold xl:py-2 px-5 py-1 text-[12px] rounded-lg xl:text-[14px] mt-10 xl:px-8"
                onClick={product}
              >
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
