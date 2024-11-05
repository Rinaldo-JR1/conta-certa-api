import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed users
  const users = [
    {
      id: 'user-id-1',
      name: 'Rinaldo Uchoa',
      balance: 0.0,
      login: 'rinaldo.uchoa',
      password: 'password123',
    },
    {
      id: 'user-id-2',
      name: 'Davi Castro',
      balance: 0.0,
      login: 'davi.castro',
      password: 'password123',
    },
    {
      id: 'user-id-3',
      name: 'John Doe',
      balance: 0.0,
      login: 'john.doe',
      password: 'password123',
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
    console.log(`User ${user.login} has been upserted`);
  }

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });