import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Marca } from './marca.model';
import { Categoria } from './categoria.model';

@Table({ tableName: 'producto' })
export class Producto extends Model<Producto> {
  @Column({ primaryKey: true })
  idproducto: number;

  @Column
  nombreproducto: string;

  @ForeignKey(() => Marca)
  @Column
  idmarca: number;

  @ForeignKey(() => Categoria)
  @Column
  idcategoria: number;

  @Column
  imagen: string;

  @Column
  precioventa: number;
}
