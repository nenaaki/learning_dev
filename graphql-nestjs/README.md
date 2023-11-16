手順書
参考にしたページ
https://docs.nestjs.com/recipes/prisma#create-your-nestjs-project

依存関係など
npx try-prisma --template typescript/graphql-nestjs

DBの作成
npx prisma migrate dev --name init

テーブルの中身を見る
  npx prisma studio