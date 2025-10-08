"use client";
import { Card, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import styles from "./ContentCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl,faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

interface ContentCardProps {
  id: number;
  title: string;
  description: string;
  chapters: number;
  image: string;
  views: number;
  author: string;
}
const base64Blur =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk0AYAADEALUxYst4AAAAASUVORK5CYII=";

const ContentCard = (props: ContentCardProps) => {
  const { id, title, description, chapters, image, views,author } = props;
  return (
    <Card
      component={Link}
      href={`/novels/${id}`}
      target="_self"
      shadow="sm"
      withBorder
      padding={"sm"}
      radius="md"
      className={`${styles.item}`}
    >
      <Image
        src={image}
        placeholder="blur"
        blurDataURL={base64Blur}
        sizes="50vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={50}
        height={50}
        alt={`${title} cover`}
      />
      <div className={`${styles.titleContainer}`}>
        <Text fw={"bold"} size="md" truncate>
          {title}
        </Text>
      </div>
      <div className={`${styles.authorContainer}`}>
        <FontAwesomeIcon icon={faFeatherPointed} />
        <Text fw={"normal"} size="sm">{author}</Text>
      </div>
      <Group mah={"1.5rem"} justify="space-between">
        <FontAwesomeIcon icon={faListUl} />
        <Text>{chapters}</Text>
        <FontAwesomeIcon icon={faEye} />
        <Text>{views}</Text>
      </Group>
    </Card>
  );
};

export default ContentCard;
