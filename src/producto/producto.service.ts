import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Producto } from '../models/producto.model';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto)
    private readonly productoModel: typeof Producto,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoModel.findAll();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoModel.findByPk(id);
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    return producto;
  }

  create(producto: Producto): Promise<Producto> {
    return this.productoModel.create(producto);
  }

  async update(id: number, producto: Producto): Promise<Producto> {
    const productoExistente = await this.findOne(id);
    productoExistente.nombreproducto = producto.nombreproducto;
    productoExistente.idmarca = producto.idmarca;
    productoExistente.idcategoria = producto.idcategoria;
    productoExistente.imagen = producto.imagen;
    productoExistente.precioventa = producto.precioventa;
    return productoExistente.save();
  }

  async remove(id: number): Promise<void> {
    const producto = await this.findOne(id);
    await producto.destroy();
  }
}
