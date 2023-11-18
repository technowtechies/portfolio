import React from "react";
import Logo3m from "../Assests/3M-Logo.png";
import Harman from "../Assests/Harman_logo.svg.png";
import LogoOsram from "../Assests/Osram-logo.png";
import LogoPoineer from "../Assests/Pioneer-logo.png";
import LogoSony from "../Assests/Sony-logo.png";
import LogoJBl from "../Assests/jbl-2-logo-png-transparent.png";
import Gradient from "../Assests/gradiant.jpeg";
import Spearker from "../Assests/Group 1942-min.png";
import Prad from "../Assests/logoprad s.png";
import Proman from "../Assests/logoproman s.jpeg";
import Jlaudio from "../Assests/logojlaudio s.png";
import useMediaQuery from "@mui/material/useMediaQuery";

import Marquee from "react-fast-marquee";

let logos = [
  Logo3m,
  Harman,
  LogoOsram,
  LogoPoineer,
  LogoSony,
  LogoJBl,
  Prad,
  Proman,
  Jlaudio,
];

function ShowBrands() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="w-screen h-full">
      <img
        src={Gradient}
        alt=""
        srcset=""
        className={`absolute  object-cover opacity-25`}
      />
      <div className="relative">
        <h1 className="text-[#191A15] text-center text-[20px] xl:text-4xl font-extrabold mt-14">
          More than <span className="text-[#4A69E2]">25 + Brands</span>
        </h1>

        <Marquee pauseOnHover speed={150} className="h-28 w-full mt-16 ">
          <div className="flex justify-center items-center ">
            {logos?.map((e) => (
              <img
                src={e}
                alt="Logo3m"
                className="w-[55px] xl:w-[186px] xl:h-[70px] mx-10 object-contain"
              />
            ))}
          </div>
        </Marquee>
        <h1
          className="text-center font-extrabold text-[20px] xl:text-6xl mt-14"
          id="aboutus"
        >
          About us
        </h1>
      </div>
      <div
        className={`flex ${
          !matches ? "flex-col" : "flex-row px-12"
        }  items-center gap-12 relative`}
      >
        <img
          src={Spearker}
          alt=""
          srcset=""
          className="w-[260px] xl:w-[670px] "
        />
        <div className="">
          {!matches ? (
            <h1 className=" text-[18px]  font-extrabold">
              Premium accessories Best seller
            </h1>
          ) : (
            <h1 className=" text-4xl  font-extrabold">
              Premium accessories <br />
              Best seller
            </h1>
          )}

          <p className="xl:text-xl text-[12px]  font-normal mt-12 w-[300px]  xl:w-[500px]">
            "With over 13 years of collective experience, our skilled
            technicians pride themselves on delivering top-notch service. We've
            embraced the convenience of plug-and-play solutions, ensuring a
            seamless experience for our clients. Rest assured, we value your
            trust and stand by the quality of our work, maintaining warranties
            without expiration. We are committed to providing the best possible
            service using high-quality standards. Your satisfaction is our
            priority."
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowBrands;

// <div className="w-screen">
{
  /* <img
src={Gradient}
alt=""
srcset=""
className="absolute object-cover opacity-25"
/>
<div className="relative">
<h1 className="text-[#191A15] text-center text-4xl font-extrabold mt-14">
  More than <span className="text-[#4A69E2]">25 + Brands</span>
</h1>

<Marquee pauseOnHover speed={150} className="h-28 w-full mt-16 mx-14">
  <div className="flex justify-center items-center ">
    {logos?.map((e) => (
      <img
        src={e}
        alt="Logo3m"
        className="w-[186px] h-[70px] mx-10 object-contain"
      />
    ))}
  </div>
</Marquee>
<h1 className="text-center font-extrabold text-6xl mt-14">About us</h1>
<div className="flex items-center gap-4">
  <img src={Spearker} alt="" srcset="" className="w-[670px] ml-32" />
  <div>
    <h1 className="text-6xl font-extrabold">
      Premium accessories <br />
      Best seller
    </h1>
    <p className="text-3xl font-normal mt-12 w-[670px]">
      Let's make your work more organize and easily using the Taskio
      Dashboard with many of the latest featuresin managing work every
      day. Let's make your work more organize and easily using the
      Taskio Dashboard with many of the latest featuresin managing work
      every day.
    </p>
  </div>
</div>
</div>
</div> */
}
