import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3001, () => {
    console.log(`
      Server ready at: http://localhost:3001/graphql
      See sample queries: http://pris.ly/e/ts/graphql-nestjs#using-the-graphql-api
`)
  })
}
bootstrap()
