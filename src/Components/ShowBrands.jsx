import React from "react";
import Logo3m from "../Assests/3M-Logo.png";
import Harman from "../Assests/Harman_logo.svg.png";
import LogoOsram from "../Assests/Osram-logo.png";
import LogoPoineer from "../Assests/Pioneer-logo.png";
import LogoSony from "../Assests/Sony-logo.png";
import LogoJBl from "../Assests/jbl-2-logo-png-transparent.png";
import Gradient from "../Assests/gradiant.jpeg";
import Spearker from "../Assests/speakers.png";

import Marquee from "react-fast-marquee";

let logos = [Logo3m, Harman, LogoOsram, LogoPoineer, LogoSony, LogoJBl];

function ShowBrands() {
  return (
    <div className="w-screen h-full">
      <img
        src={Gradient}
        alt=""
        srcset=""
        className="absolute object-cover opacity-25"
      />
      <div className="relative">
        <h1 className="text-[#191A15] text-center text-4xl font-extrabold mt-14">
          More than <span className="text-[#4A69E2]">25 + Brands</span>
        </h1>

        <Marquee pauseOnHover speed={150} className="h-28 w-full mt-16 ">
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
      </div>
      <div className="flex items-center gap-12 relative">
        <img src={Spearker} alt="" srcset="" className="w-[670px] ml-20" />
        <div className="">
          <h1 className="text-4xl  font-extrabold">
            Premium accessories <br />
            Best seller
          </h1>
          <p className="text-xl  font-normal mt-12 w-[500px]">
            Our technician experience is more than 13  We all use plug and play. We don’t expired your warranty.We use best quality
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
