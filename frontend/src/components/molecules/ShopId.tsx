import { Text, HStack } from "@chakra-ui/react";

export type ShopIdProps = {
  shopId: string;
};

export const ShopId: React.FC<ShopIdProps> = (props) => {
  const { shopId } = props;
  return (
    <HStack>
      <Text>店舗Id: {shopId}</Text>
    </HStack>
  );
};

export default ShopId;
