import prisma from "@/lib/prisma";
import styles from "../[chapterId]/Chapter.module.css";

async function Page({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;
  const frames = await prisma.frame.findMany({
    where: { chapterId },
    include: { chapter: true },
  });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{frames[0].chapter.title}</h1>
        <div className={styles.list}>
          {frames.map((frame) => (
            <img key={frame.id} src={frame.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
