import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Marca } from '../models/marca.model';
import { CreateMarcaDto } from './dto/create-marca.dto';

@Injectable()
export class MarcaService {
  constructor(
    @InjectModel(Marca)
    private readonly marcaModel: typeof Marca,
  ) {}

  findAll() {
    return this.marcaModel.findAll();
  }

  create(createMarcaDto: CreateMarcaDto) {
    return this.marcaModel.create(createMarcaDto);
  }
}
