import gql from "graphql-tag";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { urqlClient } from "../../../libs/gql-requests";
import * as React from 'react';
import { Box, Heading, Stack, StackDivider } from '@chakra-ui/react'  
import { UserId } from "@/components/molecules/UserId";
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

type Props = {
  Post: {
    userId: number
    userName: String
  }[];
};

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>ユーザー一覧</title>
        <meta name="description" content="ユーザー一覧" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>ユーザー一覧</h1>
        {props.Post.map(({userId, userName}) => (
          <Card margin='50px'>
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
      </main>
      <footer>
      </footer>
    </div>
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