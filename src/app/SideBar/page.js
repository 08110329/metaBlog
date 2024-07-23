"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

export const SideBar = () => {
  return (
    <div className="w-full flex px-5 py-5 justify-between">
      <div className="grid gap-10 ">
        <img src="/Logo.png" className="max-mg:w-[150px] max-md:h-[40px]" />
        <div className="max-md:w-[300px] max-md:h-[200px] grid gap-y-5  px-5 py-5">
          <button className="max-md:w-[166px] max-md:h-[36] flex justify-between px-2 rounded-md py-2 text-[#A1A1AA] bg-[#F4F4F5]">
            <p>Search</p>
            <CiSearch className=" max-md:w-[20px] max-md:h-[20px]" />
          </button>
          <div className="grid gap-y-4 py-2 ">
            <Link href={`/`}>Home</Link>
            <Link href={`/blogs`}>Blog</Link>
            <Link href={`/contact`}>Contact</Link>
          </div>
        </div>
      </div>
      <Link href={`/`}>
        <div className="pt-2 pr-2">
          <GrClose className="max-md:w-[25px] max-md:h-[25px]"/>
        </div>
      </Link>
    </div>
  );
};
export default SideBar;
