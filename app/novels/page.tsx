import React from "react";
import styles from "./Novel.module.css";
import { Card } from "@mantine/core";
import { redirect } from "next/navigation";
import Link from "next/link";
import ContentCard from "../components/contentCard/ContentCard";

const novelList = [
  {
    id: 1,
    title: "Whispers of Memories",
    description: "A young girl uncovers the secret of a cursed village hidden in the mountains.",
    chapters: 78,
    image: "/covers/forgotten_whispers.png",
    views: 8423,
    author: "Lily",
  },
  {
    id: 2,
    title: "The Last Flame",
    description: "In a post-apocalyptic world, the last survivor tries to preserve the light of civilization.",
    chapters: 105,
    image: "/covers/last_ember.png",
    views: 12564,
    author: "Ethan",
  },
  {
    id: 3,
    title: "Echoes in the Rain",
    description: "Two souls connect through letters during an endless storm.",
    chapters: 67,
    image: "/covers/echoes_rain.png",
    views: 7581,
    author: "Mia",
  },
  {
    id: 4,
    title: "Crimson Sonata",
    description: "A violinist makes a pact with a demon to reclaim her music.",
    chapters: 93,
    image: "/covers/crimson_sonata.png",
    views: 10122,
    author: "Noah",
  },
  {
    id: 5,
    title: "Beneath the Glass Sky",
    description: "In a city sealed under a dome, a young man begins to question the world outside.",
    chapters: 120,
    image: "/covers/glass_skies.png",
    views: 16874,
    author: "Ethan",
  },
  {
    id: 6,
    title: "Moonlight Pact",
    description: "A thief and a prince join forces to prevent a war.",
    chapters: 88,
    image: "/covers/moonlight_bargain.png",
    views: 11235,
    author: "Lily",
  },
  {
    id: 7,
    title: "The Clockmaker’s Paradox",
    description: "A genius inventor discovers a time loop tied to his own death.",
    chapters: 101,
    image: "/covers/clockmaker_paradox.png",
    views: 9472,
    author: "Mia",
  },
  {
    id: 8,
    title: "Shadow of the King",
    description: "A boy with dormant dark power must choose between light and darkness.",
    chapters: 98,
    image: "/covers/shadow_king.png",
    views: 11003,
    author: "Noah",
  },
  {
    id: 9,
    title: "Ice Crown",
    description: "A northern princess embarks on a journey to reclaim her stolen throne.",
    chapters: 85,
    image: "/covers/ice_crown.png",
    views: 8991,
    author: "Ethan",
  },
  {
    id: 10,
    title: "Flower Beneath the Sand",
    description: "A forbidden love story in the desert and the fight for freedom.",
    chapters: 90,
    image: "/covers/desert_flower.png",
    views: 10455,
    author: "Sophia",
  }
]

const page = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h1>Novel</h1>
        <div className={`${styles.list}`}>
          {novelList.map((novel) => (
             <ContentCard key={novel.id} {...novel} />
          ))}
        </div>
      </div>
    </div>
  );
};
     

export default page;
