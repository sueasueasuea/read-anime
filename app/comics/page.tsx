import React from "react";
import styles from "./Comic.module.css";
import { Card } from "@mantine/core";
import { redirect } from "next/navigation";
import Link from "next/link";
import ContentCard from "../components/contentCard/ContentCard";
import prisma from "@/lib/prisma";

const page = async () => {
  const comics = await prisma.comic.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h1>Comic</h1>
        <div className={`${styles.list}`}>
          {comics.map((comic) => (
            <ContentCard
              image={comic.coverUrl}
              author={comic.author.name}
              key={comic.id}
              id={comic.id}
              title={comic.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
