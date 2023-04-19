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

@Resolver(Item)
export class ItemResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Item], { nullable: true })
  async allItems(@Context() ctx) {
    return this.prismaService.item.findMany()
  }
}