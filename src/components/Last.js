import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Last = () => {
  return (
    <div className="w-full flex flex-col px-4 pt-20 bg-[#F6F6F7] gap-y-6	">
      <div className="grid md:flex gap-5">
        <div className="md:w-[289px] md:h-[236px] flex flex-col gap-y-3	">
          <h5 className="text-[#181A2A] text-lg font-semibold ">About</h5>
          <p className="text-[#696A75] text-base	font-normal	">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex flex-col text-base	font-normal text-[#3B3C4A]">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="md:w-[521px] md:justify-center md:grid md:h-[88px] flex gap-x-4 text-[#3B3C4A] text-base font-normal">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-x-6 text-[#6D6E76] text-base	font-normal">
          <FaFacebook />
          <IoLogoTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="py-8 gap-y-16	md:flex md:justify-between grid border-t-2 border-gray-300 ">
        <img src="/1.png" className="w-[231px] h-[54px]" />
        <div className=" text-[#3B3C4A] text-base font-normal flex flex-col gap-y-4 ">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
