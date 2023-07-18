import { ProductName } from '../atoms/ProductName';
import { ProductPrice } from '../atoms/ProductPrice';

export type ProductCardProps = {
  name: string;
  price: number;
};

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div>
      <ProductName name={props.name}/>
      <ProductPrice price={props.price.toString()}/>
    </div>
  );
};