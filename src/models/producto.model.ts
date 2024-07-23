import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Marca } from './marca.model';
import { Categoria } from './categoria.model';

@Table({ tableName: 'producto', timestamps: false })
export class Producto extends Model<Producto> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  idproducto: number;

  @Column({ type: DataType.STRING(255) })
  nombreproducto: string;

  @ForeignKey(() => Marca)
  @Column({ type: DataType.INTEGER })
  idmarca: number;
  @BelongsTo(() => Marca)
  marca: Marca;

  @ForeignKey(() => Categoria)
  @Column({ type: DataType.INTEGER })
  idcategoria: number;
  @BelongsTo(() => Categoria)
  categoria: Categoria;

  @Column({ type: DataType.STRING(255) })
  imagen: string;

  @Column({ type: DataType.DECIMAL(10,2) })
  precioventa: number;
}
