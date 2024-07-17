export const BlogCard = (props) => {
  return (
    <div className=" w-fit border border-gray-300 rounded-xl flex flex-col px-4 py-4 gap-y-4">
      <img src={props.cover} className="rounded-md w-[100%] h-[240px]" />
      <div className="flex flex-col px-2 py-2 gap-y-5">
        <div className="flex flex-col gap-y-4	">
          <button className="bg-gray-100 rounded-md	text-sm	text-[#4B6BFB] font-medium	">
            {props.tag}
          </button>
          <p className="font-semibold text-2xl text-[#181A2A]">{props.desc}</p>
        </div>
        <p className="text-base	font-normal	text-[#97989F]">{props.date}</p>
      </div>
    </div>
  );
};
