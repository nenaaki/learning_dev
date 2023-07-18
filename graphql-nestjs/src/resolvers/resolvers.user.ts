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
  Parent
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { User } from '../models/user'
import { Order } from '../models/order'
import { PrismaService } from '../prisma.service'
import { Item } from 'src/models/item'


@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [User], { nullable: true })
  async allUsers(@Context() ctx) {
    return this.prismaService.user.findMany()
  }

  @ResolveField((returns) => [Order])
  async userOrders(@Parent() user: User ): Promise<Order[] | null> {
    return await this.prismaService.order.findMany(
      {
        where: {
          userId: user.userId
        }
      }
    )
  }
  
  //Relationを書く
  @Query((returns) => User, {nullable: true})
  async uniqueUser(@Args('id')id: number) {
    return await this.prismaService.user.findUnique(
      {
        where: {
          userId: id
        }
      }
    )
  }
}

