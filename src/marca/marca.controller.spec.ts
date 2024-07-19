import { Test, TestingModule } from '@nestjs/testing';
import { MarcaController } from './marca.controller';
import { MarcaService } from './marca.service';

describe('MarcaController', () => {
  let controller: MarcaController;
  let service: MarcaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcaController],
      providers: [
        {
          provide: MarcaService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            create: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<MarcaController>(MarcaController);
    service = module.get<MarcaService>(MarcaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of marcas', async () => {
    await expect(controller.findAll()).resolves.toEqual([]);
  });

  it('should create a new marca', async () => {
    const dto = { idMarca: 1, NombreMarca: 'Test' };
    await expect(controller.create(dto)).resolves.toEqual({});
  });
});
