import { ProductCard, ProductCardProps } from "../molecules/ProductCard";
import {Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Link, defineStyle } from '@chakra-ui/react'
import { ReactNode } from "react";

export type ProductListProps = {
  products: ProductCardProps[];
};

export const MainTemplate: React.FC<{children: ReactNode}> = (props) => {

  const {children} = props;
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'100px 1fr'}
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        {children}
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
};