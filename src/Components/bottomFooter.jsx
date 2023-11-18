import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import useMediaQuery from "@mui/material/useMediaQuery";

function BottomFooter() {
  const matches = useMediaQuery("(min-width:600px)");
  return !matches ? (
    <>
      <div className="w-full bg-black rounded-t-xl  mt-6 absolute  ">
        {/* <div className="w-full grid grid-cols-6 gap-5">
          <div className="col-span-3">
            <div className="flex flex-col mt-5 px-6 ">
              <h1 className="text-[#FFA52F] font-bold text-start text-[20px] ">
                Categories
              </h1>
              <div className="mt-5 text-[#E7E7E3]">
                <p className="text-[15px] font-semibold text-start">
                  Infotainment system
                </p>
                <p className="text-[15px] font-semibold text-start">
                  Car modification
                </p>
                <p className="text-[15px] font-semibold text-start">
                  Alloy wheels
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col mt-5">
              <h1 className="text-[#FFA52F] font-bold text-start text-[20px]  ">
                Company
              </h1>
              <div className="mt-5 text-[#E7E7E3]">
                <p className="text-[15px] font-semibold text-start">About</p>
                <p className="text-[15px] font-semibold text-start">Contact</p>
                <p className="text-[15px] font-semibold text-start">Product</p>
              </div>
            </div>
          </div>
        </div> */}
        <p className="text-[13px] font-normal text-center relative  text-[#E7E7E3] mt-5 mb-8 px-8 ">
          Copyright© 2023 car vibes | All Rights Reserved | Developed by{" "}
          <span
            className="font-bold uppercase"
            onClick={() => {
              window.open("https://www.technowtechies.com/", "_blank");
            }}
          >
            Technow Techies{" "}
          </span>
        </p>
      </div>
    </>
  ) : (
    <div className="w-full h-auto bg-[#232321] rounded-t-[48px] px-24 text-[#E7E7E3] absolute">
      <div className="flex h-full justify-between mt-10">
        <div className="flex flex-col mt-5">
          <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">
            About US
          </h1>
          <div className="mt-5">
            <p className="text-[20px] font-semibold text-start">
              Best Car Accessories in Bangalore with Best <br />
              Finishing in the Field.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col mt-5">
          <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">
            Categories
          </h1>
          <div className="mt-5">
            <p className="text-[20px] font-semibold text-start">
              Infotainment system
            </p>
            <p className="text-[20px] font-semibold text-start">
              Car modification
            </p>
            <p className="text-[20px] font-semibold text-start">Alloy wheels</p>
          </div>
        </div> */}
        <div className="flex flex-col mt-5">
          <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">
            Links
          </h1>
          <div className="mt-5">
            <a href="#aboutus">
              <p className="text-[20px] font-semibold text-start">About Us</p>
            </a>
            <a href="#form">
              <p className="text-[20px] font-semibold text-start">Contact Us</p>
            </a>
            <a href="#product">
              <p className="text-[20px] font-semibold text-start">Products</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">
            Follow Us
          </h1>
          <div className="flex gap-6 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=61553076407522&mibextid=ZbWKwL"
              target="blank"
            >
              <BsFacebook className="text-[24px]" />
            </a>
            <a href="">
              <BsInstagram className="text-[24px]" />
            </a>
            <a
              href="https://youtube.com/@Carvibes555?si=-BJSCoqwQx8bqJUE"
              target="blank"
            >
              <BsYoutube className="text-[24px]" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-[20px] font-light text-center  mt-[80px] mb-4 ">
        Copyright© 2023 car vibes | All Rights Reserved | Developed by{" "}
        <a href="https://www.technowtechies.com/" className="" target="blank">
          <span className="font-bold">Technow Techies </span>
        </a>
        .
      </p>
    </div>
  );
}

export default BottomFooter;
