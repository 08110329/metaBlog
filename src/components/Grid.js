import { GridCard } from "./GridCard";

export const Grid = ({ articles }) => {
  return (
    <div className="lg:w-[1016px] md:m-auto flex flex-col gap-[30px] py-5 px-5">
      <p className="text-2xl font-bold ">Trending</p>
      <div className="max-w-screen-lg flex overflow-x-scroll ">
        <div className="flex flex-row w-fit rounded-xl gap-x-5">
          {articles &&
            articles
              .slice(0, 5)
              .map((item) => (
                <GridCard
                  key={item.title}
                  image={item.cover_image}
                  tag={item.tags}
                  title={item.title}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
