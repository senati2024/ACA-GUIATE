import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Producto } from '../models/producto.model';
import { Marca } from '../models/marca.model';
import { Categoria } from '../models/categoria.model';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Op } from 'sequelize';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto)
    private readonly productoModel: typeof Producto,
  ) {}

  async findAllWithDetails(search?: string, marca?: string, categoria?: string): Promise<Producto[]> {
    const whereClause: any = {};
    
    if (search) {
      whereClause.nombreproducto = { [Op.iLike]: `%${search}%` };
    }
    
    if (marca) {
      whereClause.idmarca = marca;
    }
    
    if (categoria) {
      whereClause.idcategoria = categoria;
    }
  
    return this.productoModel.findAll({
      where: whereClause,
      include: [
        {
          model: Marca,
          as: 'marca',
        },
        {
          model: Categoria,
          as: 'categoria',
        },
      ],
    });
  }

  async findOne(id: string): Promise<Producto> {
    return this.productoModel.findByPk(id, {
      include: [
        {
          model: Marca,
          as: 'marca',
        },
        {
          model: Categoria,
          as: 'categoria',
        },
      ],
    });
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    return this.productoModel.create(createProductoDto);
  }
  
  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const producto = await this.productoModel.findByPk(id);
    if (!producto) {
      throw new Error('Product not found');
    }
    return producto.update(updateProductoDto);
  }

  async remove(id: string): Promise<void> {
    const producto = await this.productoModel.findByPk(id);
    if (!producto) {
      throw new Error('Product not found');
    }
    await producto.destroy();
  }
}
