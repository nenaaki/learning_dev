import { ProductName } from '../atom/ProductName';

export type ProductCardProps = {
  name: string;
  price: number;
};

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {name, price} = props;
  return (
    <div>
      <ProductName {...props}/>
      <p>{price}</p>
    </div>
  );
};
