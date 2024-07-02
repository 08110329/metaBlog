import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Last = () => {
  return (
    <div className="w-full px-4 py-16	">
      <div>
        <div className="flex flex-col">
          <h5>About</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="flex flex-col">
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="flex">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex ">
          <FaFacebook />
          <IoLogoTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="py-8 flex flex-col w-[100px] h-[60px]">
        <img src="/1.png" />
        <div>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
