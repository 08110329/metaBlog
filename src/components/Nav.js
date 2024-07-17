"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { NavCards } from "./NavCards";

export const Nav = ({ articles }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleLeftClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };
  const handleRigthClick = () => {
    setCarouselIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };
  return (
    <div className="w-screen h-fit px-5 md:relative overflow-hidden ">
      <div
        className="w-[418%] rounded-xl flex duration-300 gap-x-8"
        style={{ transform: `translateX(-${carouselIndex * 25}%)` }}
      >
        {articles &&
          articles
            .slice(0, 4)
            .map((item) => (
              <NavCards
                key={item.cover_image}
                image={item.cover_image}
                tag={item.tags}
                title={item.title}
                readable_publish_date={item.readable_publish_date}
              />
            ))}
      </div>
      <div className="w-full flex justify-center  mb-3">
        <button
          className="border-2	border-gray-400	w-[40px] h-[40px] rounded-md flex justify-center items-center mt-2.5"
          onClick={handleLeftClick}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="border-2	border-gray-400	w-[40px] h-[40px] rounded-md flex justify-center items-center mt-2.5"
          onClick={handleRigthClick}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
