"use client";

import { Header } from "@/components/Header";
import { Last } from "@/components/Last";
import { useParams } from "next/navigation";

const BlogPage = () => {
  const { id } = useParams();
  return (
    <div className="max-w-screen-lg m-auto flex flex-col gap-y-6">
      <Header />
      <div className="md:w-[800px] m-auto">
        <div className="grid gap-y-8 ">
          <div>
            <h1 className="text-4xl	font-semibold	text-[#181A2A]">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
            <div className="flex gap-x-6">
              <div>
                <img src="" />
                <p>Tracey Wilson</p>
              </div>
              <p>August 20, 2022</p>
            </div>
          </div>
          <div>
            <img />
          </div>
          <p className="font-normal	text-xl	text-[#3B3C4A]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels. One of the most rewarding
            aspects of traveling is immersing yourself in the local culture and
            customs. This includes trying local cuisine, attending cultural
            events and festivals, and interacting with locals. Learning a few
            phrases in the local language can also go a long way in making
            connections and showing respect.
          </p>
          <div className="grid gap-y-4">
            <h1 className="text-2xl	font-semibold	">Research Your Destination</h1>
            <p className="font-normal	text-xl	text-[#3B3C4A]">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="grid gap-y-4">
            <h1 className="text-2xl	font-semibold	">Research Your Destination</h1>
            <p className="font-normal	text-xl	text-[#3B3C4A]">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>

      <Last />
    </div>
  );
};
export default BlogPage;
