import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categoria } from '../models/categoria.model';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria)
    private readonly categoriaModel: typeof Categoria,
  ) {}

  findAll() {
    return this.categoriaModel.findAll();
  }

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaModel.create(createCategoriaDto);
  }
}