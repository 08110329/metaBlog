import { Header } from "@/components/Header";
import { Last } from "@/components/Last";

const Contact = () => {
  return (
    <div className="max-w-screen-lg m-auto flex flex-col gap-y-28">
      <Header />
      <div className="md:w-[895px] px-16 m-auto">
        <div className="grid gap-y-5 pb-9">
          <div className="grid px-16 gap-y-5">
            <h1 className="text-2xl	font-semibold">Contact Us</h1>
            <p className="text-base font-normal text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="px-14 flex py-2.5	gap-x-12">
            <div className="md:w-[294px] grid border rounded-md p-4 gap-y-2.5">
              <h1 className="text-2xl font-semibold ">Address</h1>
              <p className="font-normal	text-lg	text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="md:w-[294px] grid border rounded-md p-4 gap-y-2.5">
              <h1 className="text-2xl font-semibold ">Contact</h1>
              <p className="font-normal	text-lg	text-[#696A75]">313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>
        <div className="md:w-[643px] bg-[#F6F6F7] pl-9 pt-7 pb-11 mx-16">
          <div className="md:w-[473px] grid gap-y-6">
            <h1 className="text-[#000000] text-lg font-semibold">Leave a Message</h1>
            <div className="grid gap-y-5">
              <div className="flex gap-x-7">
                <input type="name" placeholder="Name " className="py-3 pl-3 rounded-md"></input>
                <input type="mail" placeholder="Email" className="py-3 pl-3 rounded-md"></input>
              </div>
              <input type="subject" placeholder="Subject" className="py-3 pl-3 rounded-md"></input>
              <input type="message" placeholder="Write a message" className="py-3 pl-3 rounded-md"></input>
              <button className="w-fit bg-[#4B6BFB] px-4 rounded-md py-2.5 text-[#FFFFFF]">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Last />
    </div>
  );
};
export default Contact;
