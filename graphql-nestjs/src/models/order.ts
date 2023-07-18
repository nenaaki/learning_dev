import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { User } from './user'
import { Item } from './item'

@ObjectType()
export class Order {
  @Field((type) => Int)
  orderId: number

  @Field((type) => User)
  user?: User

  @Field((type) => Int)
  userId?: number

  @Field()
  totalPrice: number

  @Field((type) => Date)
  createDate: Date

  @Field()
  status: string

  @Field((type) => Item)
  item?: Item

  @Field((type) => Int)
  amount: number
}