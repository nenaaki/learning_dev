import { ProductName } from '../atom/ProductName';

export type ProductCardProps = {
  name: string;
  price: number;
};

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {name, price} = props;
  return (
    <div>
      <ProductName name/>
      <p>{price}</p>
    </div>
  );
};
