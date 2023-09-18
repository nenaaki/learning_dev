import { Box, Card, CardHeader, Heading, Link, Text} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type ShopInfoProps = {
  shopId : number
  shopName : string
  };

export const ShopInfo : React.FC<PropsWithChildren<ShopInfoProps>> = (props) => {
  return (
    <Card margin='50px'>
      <CardHeader background='Lightblue' margin='10px' rounded="10" padding='10px'>
        <Heading size='md' color='white'>
          <Link href={`/shop/${props.shopId}`}>
            <Box>
              店舗ID: {props.shopId}
            </Box>
            <Box>
              店舗名: {props.shopName}
            </Box>
          </Link>
        </Heading>
      </CardHeader>
    </Card>
  );
};

export default ShopInfo;