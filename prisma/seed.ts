import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const lily = await prisma.user.create({
    data: {
      email: "lily@prisma.io",
      name: "Lily",
      comic: {
        create: [
          {
            title: "Whispers of Memories",
            description:
              "A young girl uncovers the secret of a cursed village hidden in the mountains.",
            coverUrl: "/covers/forgotten_whispers.png",
            published: true,
            chapters: {
              create: [
                {
                  title: "The Beginning",
                  order: 1,
                  frames: {
                    create: [
                      { imageUrl: "/frames/frame01.jpg", order: 1 },
                      { imageUrl: "/frames/frame02.jpg", order: 2 },
                      { imageUrl: "/frames/frame03.jpg", order: 3 },
                    ],
                  },
                },
                {
                  title: "The End",
                  order: 2,
                  frames: {
                    create: [{ imageUrl: "/frames/frame04.jpg", order: 1 }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      // Include comics
      comic: {
        include: {
          chapters: {
            include: {
              frames: true,
            },
          },
        },
      },
    },
  });
  console.log({ lily });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
