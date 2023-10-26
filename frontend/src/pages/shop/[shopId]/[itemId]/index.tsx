import { ProductList } from "@/components/organisms/ProductList";
import { ProductCardProps } from "@/components/molecules/ProductCard"

import gql from "graphql-tag";
import type { GetServerSideProps, NextPage } from "next";
import { urqlClient } from "../../../../libs/gql-requests";
import { Flex,Button, Spacer, Image, Center, Text, Square ,CardFooter,Box,CardBody, CardHeader, Heading, Card, Stack } from '@chakra-ui/react'
import Title from "@/components/atoms/Title";
import ShopInfo from "@/components/atoms/ShopInfo";


type ShopProps = {
  name: string;
  id: number;
  products: ProductCardProps[], 
};

type TestShopProps = {
  name: string;
  id: number;
  products: string, 
};


const itemDetail: TestShopProps[] = [
  {
    name: "itemName1",
    id: 1,
    products: "detail_1"
  },
  {
    name: "itemName2",
    id: 2,
    products: "detail_2"
  }
]

const ShopDetail: NextPage<ShopProps> = (props) => {
  const {name,id,products} = props;
  return (
    <main>
      <Title>店舗情報</Title>
      <ShopInfo shopId={id} shopName={name}></ShopInfo>

        {itemDetail.map(({name, id, products}) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
              alt='Caffe Latte'
            />
            <Stack>
            <CardBody>
              <Heading size='md'>{name}</Heading>
              <Text>商品ID：{id}</Text>
              <Text>商品紹介：{products}</Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                購入
              </Button>
            </CardFooter>
            </Stack>
          </Card>

        ))}
          {/* <ProductList products={products}/> */}

    </main>
  );
};

console.warn("---------------")

export const getServerSideProps: GetServerSideProps<ShopProps> = async (ctx) => {
  const shopId: string = ctx.query['shopId'] as string;
  try {
    const client = await urqlClient();

    const postsQuery = gql`
      query {
        uniqueShop( id: ${shopId}) {
          shopId,
          shopName,
          shopItems {
            itemName
            price
          }
        }
      }`;
    const result = await client.query(postsQuery, { id: shopId }).toPromise();

    return {
      props: {
        name: result.data.uniqueShop.shopName,
        id: result.data.uniqueShop.shopId,
        products: result.data.uniqueShop.shopItems?.map((each: { itemName: any; price: any; }): ProductCardProps => { return { name: each.itemName, price: each.price } }) ??  [],
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default ShopDetail;