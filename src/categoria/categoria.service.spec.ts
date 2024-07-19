import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaService } from './categoria.service';
import { getModelToken } from '@nestjs/sequelize';
import { Categoria } from '../models/categoria.model';

describe('CategoriaService', () => {
  let service: CategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriaService,
        {
          provide: getModelToken(Categoria),
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            create: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of categorias', async () => {
    await expect(service.findAll()).resolves.toEqual([]);
  });

  it('should create a new categoria', async () => {
    const dto = { idCategoria: 1, NombreCategoria: 'Test' };
    await expect(service.create(dto)).resolves.toEqual({});
  });
});

