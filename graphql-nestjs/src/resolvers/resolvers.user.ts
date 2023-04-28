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

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [User], { nullable: true })
  async allUsers(@Context() ctx) {
    return this.prismaService.user.findMany()
  }

  //Relationを書く
  @Query((returns) => User, { nullable: true})
  async UniqueUser(@Args('id')id: number){
    return await this.prismaService.user.findUnique(
      {
        where: {
          userId: id
        }
      }
    )
  }
}

