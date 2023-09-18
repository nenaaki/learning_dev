import { Text } from "@chakra-ui/react";

export type ProductInfoProps = {
  ItemInfo: string;
};

export const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  const {ItemInfo} = props;
  return (
    <div>
      <Text fontSize='xl'>{ItemInfo}</Text>
    </div>
  );
};