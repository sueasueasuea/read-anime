import prisma from "@/lib/prisma";
import styles from "../Comic.module.css";
import Link from "next/link";
async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapters = await prisma.chapter.findMany({
    where: { comicId: id },
    include: { comic: true },
  });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{chapters[0].comic.title}</h1>
        <div className={styles.list}>
          {chapters.map((chapter) => (
            <Link href={`/comics/${id}/${chapter.id}`} key={chapter.id}>
              {chapter.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
