import { Text, HStack } from "@chakra-ui/react";

export type ShopIdProps = {
  shopId: string;
};

export const ShopId: React.FC<ShopIdProps> = (props) => {
  const { shopId } = props;
  return (
    <HStack>
      <Text fontSize='2xs'>Id: </Text>
      <Text fontSize='2xl'>{shopId}</Text>
    </HStack>
  );
};

export default ShopId;
