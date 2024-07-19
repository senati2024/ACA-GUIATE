import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class Usuario extends Model<Usuario> {
  @Column({ primaryKey: true, autoIncrement: true })
  id_users: number;

  @Column
  username: string;

  @Column
  password: string;  // Añadir el campo password
}
