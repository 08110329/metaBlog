"use client";

import { BlogCard } from "@/components/BlogCard";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Last } from "@/components/Last";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);

    fetch(
      `https://dev.to/api/articles?page=1&per_page=${perPage}${
        category !== "All" ? `&tag=${category}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [perPage, category]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="max-w-screen-lg m-auto flex flex-col gap-y-6">
      <Header />
      <div className="h-fit grid gap-12">
        <p className="px-4 text-2xl font-bold text-[#181A2A]">All Blog Post</p>
        <div className="lg:grid lg:grid-cols-3 flex flex-col px-4 gap-y-5 lg:gap-x-5">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <BlogCard
                cover={blog.cover_image}
                tags={blog.tag_list}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          ))}
        </div>
        <button
          className="m-auto w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md"
          onClick={handleLoadMore}
        >
          {loading ? <p>Loading...</p> : <p>Load More</p>}
        </button>
      </div>
      <Last />
    </div>
  );
};

export default BlogPage;
