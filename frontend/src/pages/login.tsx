import gql from "graphql-tag";
import type { GetServerSideProps, NextPage, NextPageContext } from "next";
import Head from "next/head";
import { urqlClient } from "@/libs/gql-requests";
import * as React from 'react';
import theme from "@/components/atoms/theme";
import PrimaryButton from "@/components/molecules/PrimaryButton";
import ButtonGroup from "@/components/organisms/ButtonGroup";
import { ShopId } from "@/components/molecules/ShopId";
import Title from "@/components/atoms/Title";
import { setCookie, destroyCookie} from 'nookies';
import { CookiesProvider, useCookies } from 'react-cookie'; 
import nookies from 'nookies';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from "react";
import { initUrqlClient } from "next-urql";

const Home: NextPage = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie ] = useCookies(["token"]); 

  const onLogin = async () => {
    const client = initUrqlClient(
      {
        url: "/api/glaphql",
      },
      false
    );
    const postsQuery = gql`
    query ($userId : String!, $password : String!) {
      login (userId : $userId, password : $password) {
        token
      }
    }
    `; 
    const result = await client?.query(postsQuery, {userId, password}).toPromise();
    console.warn(result);
    if (result?.data?.login?.token)
      setCookie("token", result.data?.login.token);
  };


  return (
    <>
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="userId">
            <FormLabel>Email address</FormLabel>
            <Input type="userId" onChange={(e) => setUserId(e.target.value)}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.400'}>Forgot password?</Text>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }} onClick={onLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  </>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    return {
      props: {},
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default Home;