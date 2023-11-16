import gql from "graphql-tag";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { urqlClient, getToken } from "@/libs/gql-requests";
import * as React from 'react';
import {Text, Box, ChakraProvider, Heading, Stack, StackDivider } from '@chakra-ui/react'  
import theme from "@/components/atoms/theme";
import PrimaryButton from "@/components/molecules/PrimaryButton";
import ButtonGroup from "@/components/organisms/ButtonGroup";
import { ShopId } from "@/components/molecules/ShopId";
import {Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Link, defineStyle } from '@chakra-ui/react'
import Title from "@/components/atoms/Title";
import nookies from "nookies"

type Props = {
  shops: {
    shopId: number
    shopName: String
    shopItems: {
      itemName: String
      price: number
    }[]
  }[];
};

const Home: NextPage<Props> = (props) => {
  const { shops } = props;
  console.warn(props);
  return (
    <Text>aaaa</Text>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  try {
    const token = getToken(ctx);
    const client = await urqlClient(token);
    const postsQuery = gql`
      query {
        allShops {
          shopId,
          shopName,
          shopItems {
            itemName,
            price
          }
        }
      }
    `;
    const result = await client.query(postsQuery, {}).toPromise();
    console.warn(result.data.allShops);
    console.warn(result.data.allShops[0].shopItems);
    return {
      props: {
        shops: result.data.allShops,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default Home;