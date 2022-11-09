import { PrimaryKey, DataType, Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'orders',
})
export class Order extends Model<Order> {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  description: string;

  @Column({ allowNull: false, type: DataType.BOOLEAN })
  status: boolean;
}
