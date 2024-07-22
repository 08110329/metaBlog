import { BlogTag } from "./BlogTag";
export const BlogCard = (props) => {
  return (
    <div className=" w-fit h-[496px] border border-gray-300 rounded-xl flex flex-col px-4 py-4 gap-y-4">
      <img src={props.cover} className="rounded-md w-[100%] h-[240px]" />
      <div className="flex flex-col px-2 py-2 gap-y-5">
        <div className="flex flex-wrap gap-y-4">
          {props.tags.map((tag, index) => (
            <BlogTag key={index} tag={tag} />
          ))}
          ;
          <p className="font-semibold text-2xl text-[#181A2A]">{props.title}</p>
        </div>
        <p className="text-base	font-normal	text-[#97989F]">{props.date}</p>
      </div>
    </div>
  );
};
