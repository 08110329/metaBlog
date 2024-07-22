import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-fit py-5 px-5 flex justify-between gap-x-28">
      <img src="/Logo.png" className="w-[135px] h-[26px]" />
      <div className="flex gap-x-5 md:visible max-md:hidden ">
        <div className="flex gap-x-10	px-56 py-2 justify-center">
          <Link href={`/`}>Home</Link>
          <Link href={`/blogs`}>Blog</Link>
          <Link href={`/contact`}>Contact</Link>
        </div>
        <button className="flex gap-x-3 px-2 rounded-md	py-2 text-[#A1A1AA] bg-[#F4F4F5]">
          <p>Search</p>
          <CiSearch className="" />
        </button>
      </div>
      <RxHamburgerMenu className="w-[32px] h-[32px] md:hidden max-md:visible" />
    </div>
  );
};
