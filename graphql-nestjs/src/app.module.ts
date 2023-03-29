import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from './prisma.service'
import { UserResolver } from './resolvers/resolvers.user'
import { ItemResolver } from './resolvers/resolvers.item'
import { ShopResolver } from './resolvers/resolvers.shop'
import { OrderResolver } from './resolvers/resolvers.order'
import { join } from 'path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Item } from './models/item';
import { User } from './models/User';
import { Order } from './models/order';
import { Shop } from './models/Shop';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    Item,
    User,
    Order,
    Shop
  ],
  controllers: [],
  providers: [PrismaService, UserResolver, ItemResolver, ShopResolver, OrderResolver],
})
export class AppModule {}
