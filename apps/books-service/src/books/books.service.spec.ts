import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { PrismaModule } from 'src/prisma/prisma.module';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
