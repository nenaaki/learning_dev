import { Text } from "@chakra-ui/react";

export type ProductPriceProps = {
  price: string;
};

export const ProductPrice: React.FC<ProductPriceProps> = (props) => {
  const { price } = props;
  return (
    <div>
      <Text fontSize='xl'>{price}</Text>
    </div>
  );
};