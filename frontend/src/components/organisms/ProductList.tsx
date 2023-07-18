import { ProductCard, ProductCardProps } from "../molecules/ProductCard";

export type ProductListProps = {
  products: ProductCardProps[];
};

export const ProductList: React.FC<ProductListProps> = (props) => {
  const {products} = props;
  const list = products.map((product) => 
    <li>
      <ProductCard {...product} />
    </li>
  )
  return (
    <ul> 
      {list}
    </ul>
  );
};