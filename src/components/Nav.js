"use client";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { NavCards } from "./NavCards";

export const Nav = ({ articles }) => {
  return (
    <div className="w-full h-[600px] px-5 relative ">
      {articles &&
        articles
          .slice(0, 1)
          .map((item) => (
            <NavCards
              key={item.cover_image}
              image={item.cover_image}
              tag={item.tags}
              title={item.title}
              readable_publish_date={item.readable_publish_date}
            />
          ))}
      <div className="w-full flex justify-center ">
        <button className="border-2	border-gray-400	w-[40px] h-[40px] rounded-md flex justify-center items-center">
          <IoIosArrowBack />
        </button>
        <button className="border-2	border-gray-400	w-[40px] h-[40px] rounded-md flex justify-center items-center">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
