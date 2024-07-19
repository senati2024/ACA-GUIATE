import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'categoria' })
export class Categoria extends Model<Categoria> {
  @Column({ primaryKey: true, autoIncrement: true })
  idcategoria: number;

  @Column({ type: DataType.STRING(50) })
  nombrecategoria: string;
}
