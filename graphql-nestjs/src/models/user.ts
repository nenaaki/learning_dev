import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { Order } from './order'
import { Shop } from './shop'

@ObjectType()
export class User {
  @Field((type) => Int)
  userId: number

  @Field()
  userName: string

  @Field()
  @IsEmail()
  email: string

  @Field((type) => Int)
  authority: number

  @Field()
  password: string

  @Field((type) => [Order], { nullable: true })
  orders?: Order[] | null

  @Field((type) => Shop, { nullable: true })
  shop?: Shop | null
}