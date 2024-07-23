import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categoria } from '../models/categoria.model';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria)
    private readonly categoriaModel: typeof Categoria,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaModel.findAll();
  }

  async findOne(id: string): Promise<Categoria> {
    return this.categoriaModel.findByPk(id);
  }

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriaModel.create(createCategoriaDto);
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<number> {
    const [affectedCount] = await this.categoriaModel.update(updateCategoriaDto, {
      where: { idcategoria: id },
    });
    return affectedCount;
  }

  async remove(id: string): Promise<void> {
    const categoria = await this.findOne(id);
    if (categoria) {
      await categoria.destroy();
    }
  }
}
