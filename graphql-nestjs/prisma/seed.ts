import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
const now = new Date()

const orderData: Prisma.OrderCreateInput[] = [
 {
   totalPrice: 1000,
   createDate: now,
   status: '完了',
   amount: 2,
   user: {
    create: {
      userName: 'testUserName_1',
	    email: 'testEmail_1',
	    authority: 0,
	    password: 'testPassword_1',
    }
   },
   item: {
    create: {
      itemName: 'testItemName_1',
      detail: 'testDetail_1',
      price: 500,
      shop: {
        create: {
          shopName: 'testshopName_1',
          admin: {
            create: {
              userName: 'testUserName_2',
              email: 'testEmail_2',
              authority: 1,
              password: 'testPassword_2',
            }
          },
        },
      },
    },
   },
 },
 {
  totalPrice: 2000,
  createDate: now,
  status: '完了',
  amount: 1,
  user: {
   create: {
     userName: 'testUserName_3',
     email: 'testEmail_3',
     authority: 0,
     password: 'testPassword_3',
   }
  },
  item: {
   create: {
     itemName: 'testItemName_2',
     detail: 'testDetail_2',
     price: 2000,
     shop: {
       create: {
         shopName: 'testshopName_2',
         admin: {
           create: {
             userName: 'testUserName_4',
             email: 'testEmail_4',
             authority: 1,
             password: 'testPassword_4',
           }
         },
       },
     },
   },
  },
 },
] 

async function main() {
  console.log(`Start seeding ...`)
  for (const u of orderData) {
    const order = await prisma.order.create({
      data: u,
    })
    console.log(`Created user with id: ${order.userId}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
