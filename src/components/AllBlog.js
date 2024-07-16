import { BlogCard } from "./BlogCard";

export const AllBlog = ({ articles }) => {
  return (
    <div>
      <div className="w-fit h-fit px-4 flex flex-col gap-y-8">
        <h3 className="text-[#181A2A] text-2xl font-bold	">All Blog Post</h3>
        <div className="flex items-center gap-5">
          <p className="font-bold	text-xs	text-[#495057]">All</p>
          <p className="font-bold	text-xs	text-[#495057]">Design</p>
          <p className="font-bold	text-xs	text-[#495057]">Travel</p>
          <p className="font-bold	text-xs	text-[#495057]">Fashion</p>
          <p className="font-bold	text-xs	text-[#495057]">Technology</p>
          <p className="font-bold	text-xs	text-[#495057]">Branding</p>
        </div>
      </div>
      <div>
        {articles.map((item, index) => {
          return (
            <>
              <BlogCard
                cover={item.cover_image}
                tag={item.tags}
                desc={item.description}
                date={item.published_at}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
