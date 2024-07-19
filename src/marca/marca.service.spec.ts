import { Test, TestingModule } from '@nestjs/testing';
import { MarcaService } from './marca.service';
import { getModelToken } from '@nestjs/sequelize';
import { Marca } from '../models/marca.model';

describe('MarcaService', () => {
  let service: MarcaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarcaService,
        {
          provide: getModelToken(Marca),
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            create: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<MarcaService>(MarcaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of marcas', async () => {
    await expect(service.findAll()).resolves.toEqual([]);
  });

  it('should create a new marca', async () => {
    const dto = { idMarca: 1, NombreMarca: 'Test' };
    await expect(service.create(dto)).resolves.toEqual({});
  });
});
