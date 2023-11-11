import React from "react";
import Carimage from "../Assests/Group 1941.jpg";
export default function Home() {
  return (
    <div className="w-screen h-full">
      <div className="h-screen w-full relative">
        <img
          src={Carimage}
          alt=""
          className="absolute w-screen h-full  object-cover  "
        />
        <div className=" text-white rounded-lg  mx-12 relative top-5  h-16 px-4 flex items-center justify-between ">
          {/* logo */}
          <img
            src="https://s3-alpha-sig.figma.com/img/f22f/bd9f/10507b295a63295a49f6c6446b5149e7?Expires=1700438400&Signature=ABK11kzC8wF28xTrD9osrezqiEnzbqRjHjOoJI40gnDHzg3uyfRQXC1SOsF-uA0kspqQQ01soJFOVKRQwYvhu98FDrmIg0gFN6cjFKx3jg8BqNIahYsRGL0hIF5qy7s5rLtqXmQImUsrQDZyA2YcsTCgBne6632OxcI0R4l1YSFuHH9sx2N-WzsPjmtDMOYptX9WY4utpdVg739aVGfennZhgVYTKSwmnYnmvsv9MFrxYcZurqeNDslQqTpdp~EpZKI51yj89LRqdYDqvY-vqgtHUG46x1wxl~fxVPNPn8B-RjELEeEKjLXhJuAeliH8eLgSOHId-ZuvtzLVkQpkuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-44 h-11 object-cover rounded-lg"
          />
          {/* div NAv LInks */}
          <div className="flex w-full items-center gap-10 justify-end px-4">
            <ul className="flex justify-between gap-10">
              <li>Home</li>
              <ul>Product</ul>
              <ul>About us</ul>
            </ul>
            <button className="bg-[#FFA52F] text-black font-bold py-2 px-4 rounded-lg text-[12px]">
              Contact Us
            </button>
          </div>
        </div>
        {/* eliation text */}
        <div className="text-white absolute bottom-14 left-32 ">
          <h1 className="text-[80px] font-extrabold text-slate-300  leading-[1.1]">
            Elevate your ride with <br />
            premium car Accessories
          </h1>
          <button className="bg-[#FFA52F] text-black font-bold py-2 rounded-lg text-[12px] mt-10 px-8 ">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
}
