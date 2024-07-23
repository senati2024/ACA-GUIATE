import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Producto } from './producto.model';

@Table({ tableName: 'categoria', timestamps: false })
export class Categoria extends Model<Categoria> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  idcategoria: number;

  @Column({ type: DataType.STRING(50) })
  nombrecategoria: string;

  @HasMany(() => Producto)
  productos: Producto[];
}
