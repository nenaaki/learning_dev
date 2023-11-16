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
import { PrismaService } from '../prisma.service'
import { Order } from '@prisma/client'
import { Item } from 'src/models/item'
import { Shop } from 'src/models/shop'
import { Roles } from 'src/decorators/decorator'

@Resolver(Shop)
export class ShopResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Roles("admin")
  @Query((returns) => [Shop], { nullable: true })
  async allShops(@Context() ctx) {
    return await this.prismaService.shop.findMany()
  }

  @ResolveField((returns) => [Item])
  async shopItems(@Parent() shop: Shop ): Promise<Item[] | null> {
    return await this.prismaService.item.findMany(
      {
        where: {
          shopId: shop.shopId
        }
      }
    )
  }

  @Query((returns) => Shop, { nullable: true })
  async uniqueShop(@Args('id')id: number){
    return await this.prismaService.shop.findUnique(
      {
        where: {
          shopId: id
        }
      }
    )
  }
}