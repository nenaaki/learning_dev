import 'reflect-metadata'
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Root,
  InputType,
  Field,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { User } from '../models/user'
import { PrismaService } from '../prisma.service'
import { Order } from 'src/models/order'
import { Item } from 'src/models/item'

@Resolver(Order)
export class OrderResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Order], { nullable: true })
  async allOrders(@Context() ctx) {
    return this.prismaService.order.findMany()
  }

  @Query((returns) => Order, { nullable: true})
  async UniqueOrder(@Args('id')id: number){
    return await this.prismaService.order.findUnique(
      {
        where: {
          orderId: id
        }
      }
    )
  }
}
