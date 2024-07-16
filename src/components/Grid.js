import { GridCard } from "./GridCard";

export const Grid = ({ articles }) => {
  return (
    <div className="w-[1231px] flex">
      <div className=" flex flex-col gap-[30px] px-4">
        <p className="text-2xl font-bold	">Trending</p>
        {articles &&
          articles
            .slice(0, 1)
            .map((item) => (
              <GridCard
                key={item.cover_image}
                image={item.cover_image}
                tag={item.tags}
                title={item.title}
              />
            ))}
      </div>
    </div>
  );
};
