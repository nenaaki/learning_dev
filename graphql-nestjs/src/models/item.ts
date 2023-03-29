import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Order } from './order'
import { Shop } from './shop'

@ObjectType()
export class Item {
  @Field((type) => Int)
  itemId: number

  @Field((type) => Int)
  price: number

  @Field()
  itemName: string

  @Field((type) => Shop)
  shop?: Shop

  @Field()
  detail: string

  @Field((type) => [Order], { nullable: true })
  orders?: [Order] | null
}