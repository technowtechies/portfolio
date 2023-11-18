import React from "react";
import gradient from "../Assests/gradiant.jpeg";
import { FiPhoneCall } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
// import { RiTwitterXFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import useMediaQuery from "@mui/material/useMediaQuery";

function Footer() {
  const matches = useMediaQuery("(min-width:600px)");
  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect data from the form
    const formData = {
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    emailjs.init("6ScjgP37CE5TQLWIO");
    emailjs
      .send("service_scw79ep", "template_7p8psk8", formData)
      .then((response) => {
        event.target.reset();
        toast("Email sent successfully");
      })
      .catch((error) => {
        toast.warn("Oops reach us with some other way !");
      });
  };

  return !matches ? (
    <>
      <div className="flex justify-center w-full mt-20" id="form">
        <div className="flex-col bg-[#222938] w-[90%] h-auto rounded-[20px] justify-center py-12  ">
          <h1 className="text-white font-medium text-xl w-full text-center  ">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full px-4 py-5">
              <p className="text-white text-start text-xl">Email</p>
              <input
                type="email"
                name="email"
                className="w-full mt-3 h-[50px] rounded-[10px] px-4"
                placeholder="Enter your email"
              />
              <p className="text-white text-start text-xl mt-5">Phone number</p>
              <input
                type="text"
                name="phone"
                className="w-full mt-3 h-[50px] rounded-[10px] px-4"
                placeholder="+91 xxxxxxxxxx"
              />
              <p className="text-white text-start text-xl mt-5">Message</p>
              <input
                type="text"
                name="message"
                className="w-full mt-3 h-[80px] rounded-[10px] px-4"
                placeholder="What are you saying?"
              />
              <button
                type="submit"
                className="w-full h-[60px] bg-[#FFA52F] text-white mt-12 text-base font-semibold rounded-[10px]"
              >
                Submit
              </button>
            </div>
          </form>
          {/* <div className="flex flex-col w-full px-20 py-20">
          <p className="text-white text-start text-2xl">Email</p>
          <input type="email" className="w-full mt-5 h-[50px] rounded-[10px] px-4" placeholder="Enter your email" />
          <p className="text-white text-start text-2xl mt-5">Phone number</p>
          <input type="text" className="w-full mt-5 h-[50px] rounded-[10px] px-4" placeholder="+91 xxxxxxxxxx" />
          <p className="text-white text-start text-2xl mt-5">Message</p>
          <input type="text" className="w-full mt-5 h-[80px] rounded-[10px] px-4 bo" placeholder="What are you say ?" />
          <button className="w-full h-[60px] bg-[#FFA52F] text-white mt-12 text-base font-semibold rounded-[10px]">Submit</button>
        </div> */}
        </div>
      </div>
      <div className="w-full mt-20">
        <div className="flex flex-col">
          {/* {container for the text} */}
          <div className="flex justify-center">
            <div className="w-full">
              <h1 className="font-bold text-[30px]  w-full text-center  ">
                Most Promising <span className="text-[#4A69E2] ">Car</span>
                <br />
                <h1 className="text-[#4A69E2]"> Accessories</h1>
              </h1>
            </div>
          </div>

          {/* Reach us content */}
          <div className="w-full mt-10">
            <div className="flex justify-center ">
              <img
                src={gradient}
                alt=""
                srcset=""
                className="opacity-30 relative h-[400px]"
              />
              <div className="absolute">
                <h1 className="text-center text-[24px] font-bold mt-5">
                  Reach us
                </h1>
                <div className="flex items-center gap-2 w-full text-[16px] mt-8">
                  {" "}
                  <a href="tel:+91 9199955502">
                    <div className="flex items-center gap-2">
                      <FiPhoneCall className="" />
                      <p>+91 9199955502 </p>
                    </div>
                  </a>
                </div>
                <div className="flex items-center gap-2 w-full text-[16px] mt-2">
                  {" "}
                  <a href="mailto:Carvibes555@gmail.com">
                    <div className="flex items-center gap-2">
                      <TfiEmail />
                      <p className="">Carvibes555@gmail.com</p>
                    </div>
                  </a>
                </div>
                <div
                  className="flex items-start gap-2 w-full text-[16px] mt-4"
                  onClick={() => {
                    window.open(
                      "https://maps.app.goo.gl/voLijTYgQL8w7Kf17?g_st=iw",
                      "_blank"
                    );
                  }}
                >
                  {" "}
                  <TfiLocationPin />
                  <p className="w-[287px] text-start">
                    525,Bannerghatta Rd,Sundar Ram Shetty
                    Nagar,Bilekahali,Signal Next to Kalyani motors service
                    nearby Vega city Mall, Bengaluru 76
                  </p>
                </div>
                <h1 className="text-[#191A15] text-[16px] font-bold mt-5 mb-5 text-center">
                  Follow Us
                </h1>
                <div className="flex justify-around text-start mt-6 ">
                  <a href="https://instagram.com/carvibes555?igshid=YTQwZjQ0NmI0OA==">
                    <BsInstagram className="text-pink-600 hover:text-pink-500 text-3xl  cursor-pointer" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61553076407522&mibextid=ZbWKwL"
                    target="blank"
                  >
                    <BsFacebook className="text-blue-600 hover:text-blue-500 text-3xl  cursor-pointer" />
                  </a>
                  <a
                    href="https://youtube.com/@Carvibes555?si=-BJSCoqwQx8bqJUE"
                    target="blank"
                  >
                    <BsYoutube className="text-red-600 hover:text-red-500 text-3xl  cursor-pointer" />
                  </a>
                </div>
              </div>
              {/* <div
                className="w-[90%] rounded-[30px] bg-cover "
                style={{
                  backgroundImage: `url(${gradient})`,
                  backgroundColor: "rgba(255, 255, 255, 0.25)", // Adjust the last value for opacity (0 to 1)
                  backgroundBlendMode: "multiply", // Optional: blending mode for better interaction with the content
                  backgroundSize: "cover",
                }}
              >
                <h1 className="text-center text-xl font-bold mt-5">Reach us</h1>
                <div className="flex items-start gap-2 w-full text-xl">
                  {" "}
                  <FiPhoneCall />
                  <p>+91 9199955502 </p>
                </div>
                <div className="flex items-start gap-2 w-full text-xl mt-2">
                  {" "}
                  <TfiEmail />
                  <p className="">Carvibes555@gmail.com</p>
                </div>
                <div className="flex items-start gap-2 w-full text-xl mt-4">
                  {" "}
                  <TfiLocationPin />
                  <p className="w-[287px] text-start">
                    525,Bannerghatta Rd,Sundar Ram Shetty
                    Nagar,Bilekahali,Signal Next to Kalyani motors service
                    nearby Vega city Mall, Bengaluru 76
                  </p>
                </div>
                <h1 className="text-[#191A15] text-xl font-bold mt-5 mb-5 text-center">
                  Follow Us
                </h1>
                <div className="flex justify-around text-start mt-6 ">
                  <BsInstagram className="text-pink-600 hover:text-pink-500 text-3xl  cursor-pointer" />
                  <a
                    href="https://www.facebook.com/profile.php?id=61553076407522&mibextid=ZbWKwL"
                    target="blank"
                  >
                    <BsFacebook className="text-blue-600 hover:text-blue-500 text-3xl  cursor-pointer" />
                  </a>
                  <a
                    href="https://youtube.com/@Carvibes555?si=-BJSCoqwQx8bqJUE"
                    target="blank"
                  >
                    <BsYoutube className="text-red-600 hover:text-red-500 text-3xl  cursor-pointer" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-screen h-full flex px-20 gap-8gap-16" id="form">
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
              <h1 className="font-bold text-2xl text-center py-5 ">
                {" "}
                Reach us
              </h1>
              <div className="flex items-start gap-2 w-full text-xl">
                {" "}
                <a href="tel:+91 9199955502">
                  <div className="flex items-center gap-3">
                    <FiPhoneCall />
                    <p>+91 9199955502 </p>
                  </div>
                </a>
              </div>
              <div className="flex items-start gap-2 w-full text-xl mt-2">
                {" "}
                <a href="mailto:Carvibes555@gmail.com">
                  <div className="flex items-center gap-3">
                    <TfiEmail />
                    <p className="">Carvibes555@gmail.com</p>
                  </div>
                </a>
              </div>
              <div
                className="flex items-start gap-2 w-full text-xl mt-4"
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/voLijTYgQL8w7Kf17?g_st=iw",
                    "_blank"
                  );
                }}
              >
                {" "}
                <TfiLocationPin />
                <p className="w-[287px] text-start">
                  525, Bannerghatta Rd, Sundar Ram Shetty Nagar, Bilekahali,
                  Signal Next to Kalyani motors service nearby Vega city Mall,
                  Bengaluru 76
                </p>
              </div>
              <h1 className="text-[#191A15] text-3xl font-bold mt-5 mb-5 text-start">
                Follow Us
              </h1>
              <div className="flex justify-between text-start mt-6 ">
                <a href="https://instagram.com/carvibes555?igshid=YTQwZjQ0NmI0OA==">
                  <BsInstagram className="text-pink-600 hover:text-pink-500 text-3xl  cursor-pointer" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61553076407522&mibextid=ZbWKwL"
                  target="blank"
                >
                  <BsFacebook className="text-blue-600 hover:text-blue-500 text-4xl mx-1 cursor-pointer" />
                </a>
                <a
                  href="https://youtube.com/@Carvibes555?si=-BJSCoqwQx8bqJUE"
                  target="blank"
                >
                  <BsYoutube className="text-red-600 hover:text-red-500 text-4xl mx-1 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex-col bg-[#222938] w-full h-auto rounded-[20px] justify-center py-12  ">
          <h1 className="text-white font-medium text-3xl w-full text-center  ">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full px-20 py-20">
              <p className="text-white text-start text-2xl">Email</p>
              <input
                type="email"
                name="email"
                className="w-full mt-5 h-[50px] rounded-[10px] px-4"
                placeholder="Enter your email"
              />
              <p className="text-white text-start text-2xl mt-5">
                Phone number
              </p>
              <input
                type="text"
                name="phone"
                className="w-full mt-5 h-[50px] rounded-[10px] px-4"
                placeholder="+91 xxxxxxxxxx"
              />
              <p className="text-white text-start text-2xl mt-5">Message</p>
              <input
                type="text"
                name="message"
                className="w-full mt-5 h-[80px] rounded-[10px] px-4"
                placeholder="What are you saying?"
              />
              <button
                type="submit"
                className="w-full h-[60px] bg-[#FFA52F] text-white mt-12 text-base font-semibold rounded-[10px]"
              >
                Submit
              </button>
            </div>
          </form>
          {/* <div className="flex flex-col w-full px-20 py-20">
          <p className="text-white text-start text-2xl">Email</p>
          <input type="email" className="w-full mt-5 h-[50px] rounded-[10px] px-4" placeholder="Enter your email" />
          <p className="text-white text-start text-2xl mt-5">Phone number</p>
          <input type="text" className="w-full mt-5 h-[50px] rounded-[10px] px-4" placeholder="+91 xxxxxxxxxx" />
          <p className="text-white text-start text-2xl mt-5">Message</p>
          <input type="text" className="w-full mt-5 h-[80px] rounded-[10px] px-4 bo" placeholder="What are you say ?" />
          <button className="w-full h-[60px] bg-[#FFA52F] text-white mt-12 text-base font-semibold rounded-[10px]">Submit</button>
        </div> */}
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

// 525,Bannerghatta Rd,Sundar Ram Shetty Nagar,Bilekahali,Signal Next to Kalyani motors service nearby Vega city Mall, Bengaluru 76
