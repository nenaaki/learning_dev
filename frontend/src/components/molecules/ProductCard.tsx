import { ProductName } from '../atoms/ProductName';
import { ProductPrice } from '../atoms/ProductPrice';
import { ProductInfo } from '../atoms/ProductInfo';

export type ProductCardProps = {
  name: string;
  price: number;
  info: string;
};

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div>
      <ProductName name={props.name}/>
      <ProductPrice price={props.price.toString()}/>
      <ProductInfo ItemInfo={props.info}></ProductInfo>
    </div>
  );
};