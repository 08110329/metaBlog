"use client";

import { Head } from "@/components/Head";
import { Nav } from "@/components/Nav";
import { Last } from "@/components/Last";
import { LastPart1 } from "@/components/LastPart1";
import { LastPart2 } from "@/components/LastPart2";
import { LastCard1 } from "@/components/LastCard1";
import { useState } from "react";
import { useEffect } from "react";
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
      <LastPart1 />
      <LastPart2 />
      <LastCard1 />
      <Last />
    </div>
  );
}
