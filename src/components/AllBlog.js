"use client";
import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

const categories = ["All", "llm", "Javascript", "ai", "Technology"];

export const AllBlog = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [blog] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );

        const data = await res.json();

        setArticles(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);

  return (
    <div className=" md:w-[1016px] md:m-auto flex flex-col gap-y-8	">
      <div className="w-fit h-fit px-4 flex flex-col gap-y-8">
        <h3 className="text-[#181A2A] text-2xl font-bold	">All Blog Post</h3>
        <div className="lg:w-[1016px] w-fit flex justify-between ">
          <div className="flex items-center text-xs font-bold gap-2.5	">
            {categories.map((item) => (
              <button
                key={item}
                className="px-1 py-1 bg-gray-200 dark:bg-slate-800 rounded-md"
                style={{
                  color: category === item ? "#4B6BFB" : "",
                }}
                onClick={() => handleCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <Link
            href={`/blogs`}
            className="w-fit md:visible max-md:hidden text-xs	font-bold	"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 flex flex-col px-4 gap-y-5 lg:gap-x-5">
        {articles.map((item, index) => {
          return (
            <Link key={item} href={`/blogs/${blog.id}`}>
              <BlogCard
                key={item.index}
                cover={item.cover_image}
                tags={item.tag_list}
                title={item.title}
                date={item.published_at}
              />
            </Link>
          );
        })}
      </div>

      <button
        className="m-auto w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};
