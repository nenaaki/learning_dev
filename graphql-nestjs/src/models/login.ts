import 'reflect-metadata'
import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Token {
  @Field((type) => String, { nullable: true })
  token?: string
}