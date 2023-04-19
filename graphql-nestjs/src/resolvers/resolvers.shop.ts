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
import { Order } from '@prisma/client'
import { Item } from 'src/models/item'
import { Shop } from 'src/models/shop'

@Resolver(Shop)
export class ShopResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Shop], { nullable: true })
  async allShops(@Context() ctx) {
    return this.prismaService.shop.findMany()
  }
}