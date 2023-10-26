import gql from "graphql-tag";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { urqlClient } from "../libs/gql-requests";
import * as React from 'react';
import { Box, ChakraProvider, Heading, Stack, StackDivider } from '@chakra-ui/react'  
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { Button, VStack } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme'
import theme from "../components/atoms/theme";
import PrimaryButton from "../components/molecules/PrimaryButton";
import ButtonGroup from "../components/organisms/ButtonGroup";
import { extendTheme } from "@chakra-ui/react";
import { UserId } from "@/components/molecules/UserId";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

type Props = {
  Post: {
    userId: number
    userName: String
  }[];
};

const Home: NextPage<Props> = (props) => {
  return (
    <ChakraProvider theme = {theme}>
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>Hello, GraphQL</h1>
        {props.Post.map(({userId, userName}, index) => (
          <Card margin='50px' key={index}>
            <CardHeader background='red' margin='50px' rounded="10">
              <Heading size='md' color='white'>
                <UserId userId={userId.toString()}/>
              </Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  ユーザー名: {userName}
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
        <input type="button" value="inputのボタン"></input>
        {/* ref="http://localhost:3000/shop/1" */}
        <div>
          <PrimaryButton>Click me</PrimaryButton>
          <ButtonGroup name=''>
            <PrimaryButton>Button 1</PrimaryButton>
            <PrimaryButton>Button 2</PrimaryButton>
            <PrimaryButton>Button 3</PrimaryButton>
          </ButtonGroup>
        </div>
      </main>
      <footer>
      </footer>
    </div>
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const client = await urqlClient();

    const postsQuery = gql`
      query {
        allUsers {
          userId,
          userName
        }
      }
    `;
    const result = await client.query(postsQuery, {}).toPromise();

    return {
      props: {
        Post: result.data.allUsers,
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