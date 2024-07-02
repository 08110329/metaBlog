"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Nav = () => {
  return (
    <div className="w-full h-[600px] px-5 relative">
      <img
        src=""
        className="w-[100%] h-[100%] rounded-xl top-0 left-0  border-2 border-indigo-600"
      />
      <div className="w-[90%] rounded-xl  bg-[#FFFFFF] absolute bottom-2 left-7	 border-2 border-indigo-600 flex 	">
        <div className="px-10 py-10	">
          <button className="bg-[#4B6BFB] "></button>
          <p className="text-4xl font-semibold "></p>
        </div>
        <p className="text-base	font-normal	"></p>
      </div>
      <div className="w-full flex justify-center ">
        <button>
          <IoIosArrowBack />
        </button>
        <button>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
