import React from "react";
import gradient from "../Assests/gradiant.jpeg";
import {FiPhoneCall} from "react-icons/fi"
import {SlLocationPin} from "react-icons/sl"
import {TfiEmail} from "react-icons/tfi"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri"

function Footer() {
  return (
    <div className="w-screen h-full flex px-20 gap-8gap-16">



       <div className="flex-1 items-center justify-center w-full px-20">
        <div className="flex flex-col">
        <div className="w-full">
        <h1 className="font-bold text-[50px]  w-full text-start  ">
          Most Promising <span className="text-[#4A69E2] ">Car</span>
          <br />
          <h1 className="text-[#4A69E2]"> Accessories</h1>
        </h1>
        </div>


        <div className="mt-10 w-full h-[700px] relative ">
          <img
            src={gradient}
            alt=""
            srcset=""
            className="opacity-25 rounded-[30px] "
          />
          
          <div className="absolute top-0 px-20">
          <h1 className="font-bold text-2xl text-center py-5 "> Reach us</h1>
          <div className="flex items-center gap-2 w-full text-2xl"> <FiPhoneCall/>
          <p >+91 9199955502 </p>
          </div>
          <div className="flex items-center gap-2 w-full text-2xl"> <TfiEmail/>
          <p className="">Carvibes555@gmail.com</p></div>
          <div className="flex items-start gap-2 w-full text-2xl"> <SlLocationPin/>
          <p className="w-[290px] text-start">
            525,Bannerghatta Rd,Sundar Ram Shetty Nagar,Bilekahali,Signal Next to Kalyani motors service nearby Vega city Mall, Bengaluru 76
          </p></div>
          <h1 className="text-[#191A15] text-3xl font-bold mt-5 mb-5 text-start">Follow Us</h1>
          <div className="flex justify-between text-start mt-5 ">
          <BsInstagram className="text-pink-600 hover:text-pink-500 text-4xl mx-1 cursor-pointer" />
          <BsFacebook className="text-blue-600 hover:text-blue-500 text-4xl mx-1 cursor-pointer" />
          <RiTwitterXFill  className="text-black hover:text-black text-4xl mx-1 cursor-pointer" />
          <BsYoutube className="text-red-600 hover:text-red-500 text-4xl mx-1 cursor-pointer" />   
          </div>
          </div>
          
        </div>

        </div>

      </div>
      <div className="flex-1">
      <div className="flex-col bg-[#222938] w-full h-auto rounded-[20px] justify-center py-12  ">
        <h1 className="text-white font-medium text-3xl w-full  ">Contact Us</h1>
        <div className="flex flex-col w-full px-20 py-20">
          <p className="text-white text-start text-2xl">Email</p>
          <input type="email" className="w-full mt-5 h-[50px] rounded-[10px] px-4" placeholder="Enter your email" />
          <p className="text-white text-start text-2xl mt-5">Phone number</p>
          <input type="text" className="w-full mt-5 h-[50px] rounded-[10px] px-4" placeholder="+91 xxxxxxxxxx" />
          <p className="text-white text-start text-2xl mt-5">Message</p>
          <input type="text" className="w-full mt-5 h-[80px] rounded-[10px] px-4 bo" placeholder="What are you say ?" />
          <button className="w-full h-[60px] bg-[#FFA52F] text-white mt-12 text-base font-semibold rounded-[10px]">Submit</button>
        </div>
        </div>
      </div> 
    </div>
  );
}

export default Footer;


//color: var(--white, #FFF);
// font-family: Inter;
// font-size: 30px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
