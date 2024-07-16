"use client";

import { Head } from "@/components/Head";
import { Nav } from "@/components/Nav";
import { Last } from "@/components/Last";
import { Grid } from "@/components/Grid";
import { useState } from "react";
import { useEffect } from "react";
import { AllBlog } from "@/components/AllBlog";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");

  const articles = await res.json();

  return articles;
};
export default function Home() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticle();

    setArticles(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen flex flex-col gap-y-16	">
      <Head />
      <Nav articles={articles} />
      <Grid articles={articles} />
      <AllBlog articles={articles} />
      <Last />
    </div>
  );
}
