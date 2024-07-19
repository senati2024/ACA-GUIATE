import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'marca' })
export class Marca extends Model<Marca> {
  @Column({ primaryKey: true })
  idmarca: number;

  @Column
  nombremarca: string;
}
