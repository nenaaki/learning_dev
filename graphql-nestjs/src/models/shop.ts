import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { User } from './user'
import { Item } from './item'

@ObjectType()
export class Shop {
  @Field((type) => Int)
  shopId: number

  @Field()
  shopName: string

  @Field((type) => User)
  admin?: User

  @Field((type) => [Item], { nullable: true })
  items?: [Item] | null
}