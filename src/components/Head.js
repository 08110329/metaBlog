import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export const Head = () => {
  return (
    <div className="w-full h-fit py-5 px-5 flex justify-between">
      <img src="/Logo.png" className="w-[135px] h-[26px]" />
      <RxHamburgerMenu className="w-[32px] h-[32px]" />
    </div>
  );
};
