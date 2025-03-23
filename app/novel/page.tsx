import React from "react";
import styles from "./Novel.module.css";
import { Card } from "@mantine/core";
import { redirect } from "next/navigation";
import Link from "next/link";

const novelList = [
  {
    id: 1,
    title: "Novel 1",
    description: "Description for Novel 1",
  },
  {
    id: 2,
    title: "Novel 2",
    description: "Description for Novel 2",
  },
  {
    id: 3,
    title: "Novel 3",
    description: "Description for Novel 3",
  },
];
const page = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h1>Novel</h1>
        <div className={`${styles.list}`}>
          {novelList.map((novel) => (
             <Card component={Link} href={`/novel/${novel.id}`} target="_self" shadow="sm" className={`${styles.item}`} key={novel.id}>
              <h2>{novel.title}</h2>
              <p>{novel.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
     

export default page;
