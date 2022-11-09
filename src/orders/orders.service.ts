import { Order } from './entities/order.entity';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private OrderModel: typeof Order,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.OrderModel.create(createOrderDto);
  }

  findAll() {
    return this.OrderModel.findAll();
  }

  findOne(id: string) {
    //return this.OrderModel.findOne({ where: { id: id } });
    return this.OrderModel.findByPk(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);
    order.update(updateOrderDto);
    return order;
  }

  async remove(id: string) {
    const order = await this.findOne(id);
    order.destroy();
  }
}
