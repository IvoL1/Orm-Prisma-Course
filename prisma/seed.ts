import { prisma } from "@/prisma";
import { faker } from "@faker-js/faker";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      },
    ],
  });
}

seed().then(() => {
  console.log("Seed generated!");
  prisma.$disconnect();
});
