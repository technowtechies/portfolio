import React from "react";
import info from "../Assests/pngwing.com (4) 1.png";
import left from "../Assests/image 33.png";
import wheel from "../Assests/image 31.png";
import seat from "../Assests/Group 1943.png";
import tesla from "../Assests/Red-Tesla-Model-S-Car-1950x917-copy-3.png";
import OS from "../Assests/OS-new-1024x661 (1).png";
import useMediaQuery from "@mui/material/useMediaQuery";

function Categoriy() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div className="w-screen h-full">
      <h1 className="text-center font-extrabold text-[30px] xl:text-6xl mt-14">
        Categories
      </h1>
      <div className="w-full flex xl:gap-2 mt-14 ">
        {/* letft side */}
        <div className="flex w-full xl:px-[20px]  xl:gap-6">
          <div className="flex-1 w-full ">
            <div className="flex flex-col px-4 xl:px-2 xl:gap-6">
              <div className="bg-[#A09EFF] w-[200px] h-[400px] xl:w-[675px]  xl:h-[1300px] rounded-[16px] xl:rounded-[50px] flex flex-col items-center justify-center gap-4 pb-4 xl:gap-6">
                <div className="w-full flex justify-center flex-col items-center mt-5 xl:mt-14">
                  {/* <div className="w-3/4 h-[490px]  bg-white rounded-2xl ">
                <img src={info} alt="" srcset="" className="relative -top-36" />
                <p className="text-center font-bold text-2xl absolute uppercase -top-64">
                  Infotainement System
                </p>
              </div> */}
                  <div className="w-full flex justify-center flex-col items-center xl:mt-20 xl:mb-8">
                    <div className="xl:w-[592px] xl:h-[480px] w-[170px] h-[150px]  bg-white rounded-2xl flex flex-col items-center relative ">
                      <img
                        src={info}
                        alt=""
                        srcset=""
                        className="absolute w-[170px] h-[117px]  xl:w-[600px] xl:h-[480px] object-cover xl:-top-10 -top-1"
                      />
                      <p className="text-center font-bold text-[12px] xl:text-2xl  uppercase absolute xl:bottw-full bottom-3 xl:bottom-10 ">
                        INFOTAINMENT SYSTEM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center flex-col items-center mt-4 xl:mt-10 xl:mb-14">
                  <div className="xl:w-[592px] xl:h-[480px] w-[170px] h-[150px]  bg-white rounded-2xl flex flex-col items-center relative ">
                    <img
                      src={left}
                      alt=""
                      srcset=""
                      className="absolute w-[170px] h-[117px]  xl:w-[600px] xl:h-[480px] object-cover  xl:object-conatin -top-3 xl:-top-20"
                    />
                    <p className="text-center font-bold text-[12px] xl:text-2xl  uppercase absolute bottom-3 xl:bottom-11 ">
                      AUDIO SYSTEM
                    </p>
                  </div>
                  {/* <div className="w-[592px] h-[480px]  bg-white rounded-2xl flex flex-col items-center relative ">
                    <img
                      src={left}
                      alt=""
                      srcset=""
                      className="absolute w-[600px] h-[480px] object-cover -top-20"
                    />
                    <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                      AUDIO SYSTEM
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className={!matches ? "px-2" : ""}>
              <div
                className={`bg-[#7FCBF5]  w-[200px] h-[190px] xl:w-[675px] xl:h-[649px] xl:px-10 rounded-2xl xl:rounded-[60px] xl:flex xl:items-center mx-2 mt-5 xl:justify-center  ${
                  !matches ? "flex items-center justify-center" : ""
                }  `}
              >
                <div className="xl:w-[592px] xl:h-[480px] w-[170px] h-[150px]   bg-white rounded-2xl flex flex-col items-center relative ">
                  <img
                    src={seat}
                    alt=""
                    srcset=""
                    className="absolute w-[170px] h-[117px]  xl:w-[600px] xl:h-[480px] object-conatin -top-3 xl:-top-20"
                  />
                  <p className="text-center font-bold text-[12px] xl:text-2xl  uppercase absolute bottom-1 xl:bottom-11 ">
                    SEAT COVERS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 w-full ">
            <div className="flex flex-col gap-[20px] xl:gap-6">
              <div
                className={`bg-[#EE5757] w-[170px] h-[190px] xl:w-[675px] xl:h-[643px] xl:px-7 rounded-2xl xl:rounded-[60px] xl:flex xl:justify-center items-center ${
                  !matches ? "flex items-center justify-center" : ""
                }  `}
              >
                <div className="xl:w-[592px] xl:h-[480px] w-[150px] h-[150px]  bg-white rounded-2xl flex flex-col items-center relative ">
                  <img
                    src={wheel}
                    alt=""
                    srcset=""
                    className="absolute w-[121px] h-[117px]  xl:w-[519px] xl:h-[502px] object-cover -top-3 xl:-top-20"
                  />
                  <p className="text-center font-bold text-[12px] xl:text-2xl  uppercase absolute bottom-3 xl:bottom-11 ">
                    ALLOY WHEELS
                  </p>
                </div>
              </div>
              {/* <div className="bg-[#EE5757] w-[170px] h-[163px] xl:w-[675px] xl:h-[620px] xl:px-7 rounded-lg xl:rounded-[60px]">
              <div className="w-[146px] h-[120px] xl:w-[582px] xl:h-[476px] bg-white flex flex-col items-center xl:rounded-[50px] my-24 mx-7 relative">
                <img
                  src={wheel}
                  alt=""
                  srcset=""
                  className="absolute w-[450px] h-[450px] object-contain -top-20"
                />
                <p className="text-center font-bold text-[8px] xl:text-2xl  uppercase absolute bottom-11 ">
                  ALLOY WHEELS
                </p>
              </div>
            </div> */}
              {/* <div className="bg-[#EE5757] w-[170px] h-[163px] xl:w-[675px] xl:h-[620px] px-7 rounded-lg xl:rounded-[60px]">
              <div className="w-[146px] h-[120px] xl:w-[582px] xl:h-[476px] bg-white flex flex-col items-center xl:rounded-[50px] my-24 mx-7 relative">
                <img
                  src={tesla}
                  alt=""
                  srcset=""
                  className="absolute w-[700px] h-[580px] object-contain -top-20"
                />
                <p className="text-center font-bold text-[8px] xl:text-2xl  uppercase absolute bottom-11 ">
                  PPF Body Wrap
                </p>
              </div>
            </div> */}
              <div
                className={`bg-[#7FCBF5]  w-[170px] h-[190px] xl:w-[675px] xl:h-[633px] xl:px-7 rounded-2xl xl:rounded-[60px] xl:flex xl:justify-center xl:items-center ${
                  !matches ? "flex items-center justify-center" : ""
                }  `}
              >
                <div className="xl:w-[592px] xl:h-[480px] w-[150px] h-[150px]  bg-white rounded-2xl flex flex-col items-center relative ">
                  <img
                    src={tesla}
                    alt=""
                    srcset=""
                    className="absolute w-[200px] h-[140px]  xl:w-[600px] xl:h-[530px] object-contain -top-3 xl:-top-20"
                  />
                  <p className="text-center font-bold text-[12px] xl:text-2xl  uppercase absolute bottom-3 xl:bottom-11 ">
                    PPF Body Wrap
                  </p>
                </div>
              </div>
              {/* <div className="bg-[#EE5757] w-[170px] h-[163px] xl:w-[675px] xl:h-[620px] px-7 rounded-lg xl:rounded-[60px]">
              <div className="w-[146px] h-[120px] xl:w-[582px] xl:h-[476px] bg-white flex flex-col items-center xl:rounded-[50px] my-24 mx-7 relative">
                <img
                  src={OS}
                  alt=""
                  srcset=""
                  className="absolute xl:w-[600px] xl:h-[480px] object-contain -top-20"
                />
                <p className="text-center font-bold text-[8px] xl:text-2xl  uppercase absolute bottom-11 ">
                  Android System Bluepunk
                </p>
              </div>
            </div> */}
              <div
                className={`bg-[#EE5757] w-[170px] h-[190px] xl:w-[675px] xl:h-[643px] xl:px-7 rounded-2xl xl:rounded-[60px] xl:flex xl:justify-center items-center ${
                  !matches ? "flex items-center justify-center" : ""
                }  `}
              >
                <div className="xl:w-[592px] xl:h-[480px] w-[150px] h-[150px]  bg-white rounded-2xl flex flex-col items-center relative ">
                  <img
                    src={OS}
                    alt=""
                    srcset=""
                    className="absolute w-[121px] h-[117px]  xl:w-[500px] xl:h-[360px] xl:object-cover object-contain -top-3 xl:-top-3"
                  />
                  <p className="text-center font-bold text-[12px] xl:text-2xl  uppercase absolute bottom-3 xl:bottom-11 ">
                    Android System Bluepunk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex p-9 ">
      <div className="flex-1 w-full">
      <div className="flex flex-row gap-10">
              <div className="bg-[#7FCBF5] w-[700px] h-[650px] px-7 rounded-[60px]">
              <div className="w-[582px] h-[476px] bg-white flex flex-col items-center rounded-[50px] my-24 mx-7 relative ">
                <img
                  src={seat}
                  alt=""
                  srcset=""
                  className="absolute w-[600px] h-[480px] object-cover -top-20"
                />
                <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                  SEAT COVERS
                </p>
              </div>
              </div>

              <div className="bg-[#7FCBF5] w-[675px] h-[650px] px-7 rounded-[60px]">
              <div className="w-[582px] h-[476px] bg-white flex flex-col items-center rounded-[50px] my-24 mx-7 relative ">
                <img
                  src={seat}
                  alt=""
                  srcset=""
                  className="absolute w-[600px] h-[480px] object-cover -top-20"
                />
                <p className="text-center font-bold text-2xl  uppercase absolute bottom-11 ">
                  SEAT COVERS
                </p>
              </div>
            </div>
      </div>
      </div>
    </div> */}
    </div>
  );
}

export default Categoriy;
