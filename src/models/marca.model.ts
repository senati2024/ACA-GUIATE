import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Producto } from './producto.model';

@Table({ tableName: 'marca', timestamps: false })
export class Marca extends Model<Marca> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  idmarca: number;

  @Column({ type: DataType.STRING(50) })
  nombremarca: string;

  @HasMany(() => Producto)
  productos: Producto[];
}