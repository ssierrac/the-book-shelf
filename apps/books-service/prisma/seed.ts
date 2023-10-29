// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function createBooks(books) {
  const createdBooks = [];
  for (const book of books) {
    const createBooks = await prisma.book.upsert({
      where: { ISBN: book.ISBN },
      update: {},
      create: book,
    });
    createdBooks.push(createBooks);
  }
  return createdBooks;
}

async function main() {
  // create two dummy
  const books = [
    {
      title: 'El Señor de los Anillos',
      pages: 1200,
      genre: 'Fantasía',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
      synopsis:
        'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
      year: 1954,
      ISBN: '978-0618640157',
      author: {
        create: {
          name: 'J.R.R. Tolkien',
        },
      },
    },
    {
      title: 'Juego de Tronos',
      pages: 694,
      genre: 'Fantasía',
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg',
      synopsis:
        'En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.',
      year: 1996,
      ISBN: '978-0553103540',
      author: {
        create: {
          name: 'George R.R. Martin',
        },
      },
    },
  ];

  const createdBooks = await createBooks(books);

  console.log({ createdBooks });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
