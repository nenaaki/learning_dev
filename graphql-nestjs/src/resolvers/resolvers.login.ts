import 'reflect-metadata'
import {
  Resolver,
  Query,
  Args,
  Context,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { Token } from 'src/models/login'
import { sign } from "jsonwebtoken";

@Resolver(Token)
export class LoginResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}


  @Query((returns) => Token, { nullable: true })
  async login(@Args('userId')userId: string, @Args('password')password: string) {
    //有効期限、ロール、userId　DBよりどの店舗のページを見れるか
    const users = await this.prismaService.user.findMany(
      {
        where: {
          email : userId,
          password : password
        }
      })
    if (users.length !== 1)
      return {}

    const token = sign({userId : users[0].userId, role : "admin"}, "secretKey", {
      expiresIn: 60*60*24,
      algorithm: "HS256",
    });

    return { token }
  }
}
