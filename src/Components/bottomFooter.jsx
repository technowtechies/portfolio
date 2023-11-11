import React from "react";
import { BsFacebook, BsInstagram,} from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri"


function BottomFooter(){
return(
    <div className="w-full h-[347px] bg-[#232321] rounded-t-[48px] px-24 text-[#E7E7E3] absolute">
      <div className="flex h-full justify-between ">
        <div className="flex flex-col mt-5">
            <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">About US</h1>
            <div className="mt-5">
            <p className="text-[20px] font-semibold text-start">best car accessories in bangalore with best <br />
                 finishing in the field</p>
                 </div>
        </div>
        <div className="flex flex-col mt-5">
            <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">Categories</h1>
            <div className="mt-5">
            <p className="text-[20px] font-semibold text-start">Infotainment system</p>
            <p className="text-[20px] font-semibold text-start">Car modification</p>
            <p className="text-[20px] font-semibold text-start">Alloy wheels</p>
            </div>
        </div>
        <div className="flex flex-col mt-5">
            <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">Company</h1>
            <div className="mt-5">
            <p className="text-[20px] font-semibold text-start">About</p>
            <p className="text-[20px] font-semibold text-start">Contact</p>
            <p className="text-[20px] font-semibold text-start">Product</p>
            </div>
        </div>
        <div className="flex flex-col mt-5">
            <h1 className="text-[#FFA52F] font-bold text-start text-[36px] ">Follow Us</h1>
            <div className="flex gap-6 mt-5">
                <BsFacebook className="text-[24px]"/>
                <BsInstagram className="text-[24px]"/>
                <RiTwitterXFill className="text-[24px]"/>
            </div>
        </div>      
      </div>
      <p className="text-[20px] font-semibold text-center relative bottom-10 " >Copyright© 2023 car vibes | All Rights Reserved | Developed by <span className="font-bold">Technow Techies </span> .</p>
    </div>
)
}


export default BottomFooter;